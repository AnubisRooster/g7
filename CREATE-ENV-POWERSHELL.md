# Creating .env Files in Windows PowerShell

This guide shows you multiple ways to create `.env` files using Windows PowerShell, from basic to advanced methods.

## 📋 Prerequisites

- Windows PowerShell (included with Windows 10/11)
- Basic PowerShell knowledge
- Your API keys ready

---

## 🔧 Method 1: Simple Text Creation (Beginner)

### Basic .env File Creation

```powershell
# Create a simple .env file
@"
OPENROUTER_API_KEY=your_api_key_here
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=deepseek/deepseek-r1:free
APP_URL=http://localhost:3000
APP_NAME=AI Interview Generator
DATABASE_URL="file:./dev.db"
"@ | Out-File -FilePath ".env" -Encoding UTF8

Write-Host "✅ .env file created successfully!" -ForegroundColor Green
```

### Create from Template

```powershell
# Copy from existing template
if (Test-Path ".env.example") {
    Copy-Item ".env.example" ".env"
    Write-Host "✅ .env file created from template!" -ForegroundColor Green
} else {
    Write-Host "❌ .env.example not found!" -ForegroundColor Red
}
```

---

## 🔧 Method 2: Interactive Creation (Recommended)

### Interactive Setup Script

```powershell
# Interactive .env file creation
Write-Host "🚀 Creating .env file interactively" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan

# Get user input
$apiKey = Read-Host "Enter your OpenRouter API key"
$baseUrl = Read-Host "Enter OpenRouter base URL (default: https://openrouter.ai/api/v1)"
$model = Read-Host "Enter model (default: deepseek/deepseek-r1:free)"
$appUrl = Read-Host "Enter app URL (default: http://localhost:3000)"
$appName = Read-Host "Enter app name (default: AI Interview Generator)"

# Set defaults
if ([string]::IsNullOrEmpty($baseUrl)) { $baseUrl = "https://openrouter.ai/api/v1" }
if ([string]::IsNullOrEmpty($model)) { $model = "deepseek/deepseek-r1:free" }
if ([string]::IsNullOrEmpty($appUrl)) { $appUrl = "http://localhost:3000" }
if ([string]::IsNullOrEmpty($appName)) { $appName = "AI Interview Generator" }

# Create .env file content
$envContent = @"
# OpenRouter Configuration
OPENROUTER_API_KEY=$apiKey
OPENROUTER_BASE_URL=$baseUrl
OPENROUTER_MODEL=$model

# Application Configuration
APP_URL=$appUrl
APP_NAME=$appName

# Database Configuration
DATABASE_URL="file:./dev.db"
"@

# Write to file
$envContent | Out-File -FilePath ".env" -Encoding UTF8

Write-Host "✅ .env file created successfully!" -ForegroundColor Green
Write-Host "📍 File location: $(Get-Location)\.env" -ForegroundColor Yellow
```

### Advanced Interactive Script with Validation

```powershell
# Advanced interactive .env creation with validation
function New-EnvFile {
    param(
        [string]$FilePath = ".env",
        [switch]$Force
    )
    
    Write-Host "🚀 Creating environment file: $FilePath" -ForegroundColor Cyan
    Write-Host "=====================================" -ForegroundColor Cyan
    
    # Check if file exists
    if ((Test-Path $FilePath) -and -not $Force) {
        $overwrite = Read-Host "File already exists. Overwrite? (y/N)"
        if ($overwrite -notmatch '^[Yy]$') {
            Write-Host "❌ Operation cancelled" -ForegroundColor Red
            return
        }
    }
    
    # Get API key with validation
    do {
        $apiKey = Read-Host "Enter your OpenRouter API key"
        if ([string]::IsNullOrEmpty($apiKey)) {
            Write-Host "❌ API key cannot be empty!" -ForegroundColor Red
        }
    } while ([string]::IsNullOrEmpty($apiKey))
    
    # Get other configurations with defaults
    $baseUrl = Read-Host "Enter OpenRouter base URL [https://openrouter.ai/api/v1]"
    $model = Read-Host "Enter model [deepseek/deepseek-r1:free]"
    $appUrl = Read-Host "Enter app URL [http://localhost:3000]"
    $appName = Read-Host "Enter app name [AI Interview Generator]"
    
    # Apply defaults
    $baseUrl = if ([string]::IsNullOrEmpty($baseUrl)) { "https://openrouter.ai/api/v1" } else { $baseUrl }
    $model = if ([string]::IsNullOrEmpty($model)) { "deepseek/deepseek-r1:free" } else { $model }
    $appUrl = if ([string]::IsNullOrEmpty($appUrl)) { "http://localhost:3000" } else { $appUrl }
    $appName = if ([string]::IsNullOrEmpty($appName)) { "AI Interview Generator" } else { $appName }
    
    # Create content
    $content = @"
# OpenRouter Configuration
OPENROUTER_API_KEY=$apiKey
OPENROUTER_BASE_URL=$baseUrl
OPENROUTER_MODEL=$model

# Application Configuration
APP_URL=$appUrl
APP_NAME=$appName

# Database Configuration
DATABASE_URL="file:./dev.db"

# Generated on: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
"@
    
    # Write file
    try {
        $content | Out-File -FilePath $FilePath -Encoding UTF8
        Write-Host "✅ Environment file created successfully!" -ForegroundColor Green
        Write-Host "📍 Location: $(Resolve-Path $FilePath)" -ForegroundColor Yellow
        
        # Show file content (excluding sensitive info)
        Write-Host "`n📝 File preview (API key hidden):" -ForegroundColor Cyan
        $preview = $content -replace 'OPENROUTER_API_KEY=.+', 'OPENROUTER_API_KEY=***HIDDEN***'
        Write-Host $preview
        
    } catch {
        Write-Host "❌ Error creating file: $_" -ForegroundColor Red
    }
}

# Usage
New-EnvFile
```

---

## 🔧 Method 3: Programmatic Creation (Advanced)

### Using PowerShell Objects

```powershell
# Create .env file using PowerShell objects
$envConfig = @{
    "OPENROUTER_API_KEY" = "your_api_key_here"
    "OPENROUTER_BASE_URL" = "https://openrouter.ai/api/v1"
    "OPENROUTER_MODEL" = "deepseek/deepseek-r1:free"
    "APP_URL" = "http://localhost:3000"
    "APP_NAME" = "AI Interview Generator"
    "DATABASE_URL" = "`"file:./dev.db`""
}

# Convert to .env format
$envContent = $envConfig.GetEnumerator() | ForEach-Object {
    "$($_.Key)=$($_.Value)"
} | Out-String

# Write to file
$envContent | Out-File -FilePath ".env" -Encoding UTF8

Write-Host "✅ .env file created from PowerShell object!" -ForegroundColor Green
```

### Using JSON Configuration

```powershell
# Create from JSON configuration
$jsonConfig = @{
    openrouter = @{
        apiKey = "your_api_key_here"
        baseUrl = "https://openrouter.ai/api/v1"
        model = "deepseek/deepseek-r1:free"
    }
    app = @{
        url = "http://localhost:3000"
        name = "AI Interview Generator"
    }
    database = @{
        url = "file:./dev.db"
    }
}

# Convert JSON to .env format
$envContent = @"
# OpenRouter Configuration
OPENROUTER_API_KEY=$($jsonConfig.openrouter.apiKey)
OPENROUTER_BASE_URL=$($jsonConfig.openrouter.baseUrl)
OPENROUTER_MODEL=$($jsonConfig.openrouter.model)

# Application Configuration
APP_URL=$($jsonConfig.app.url)
APP_NAME=$($jsonConfig.app.name)

# Database Configuration
DATABASE_URL="$($jsonConfig.database.url)"
"@

# Write to file
$envContent | Out-File -FilePath ".env" -Encoding UTF8

Write-Host "✅ .env file created from JSON configuration!" -ForegroundColor Green
```

---

## 🔧 Method 4: Secure Creation (Production)

### Using Windows Credential Manager

```powershell
# Store API key securely in Windows Credential Manager
function Set-SecureApiKey {
    param(
        [string]$ApiKey,
        [string]$CredentialName = "OpenRouterApiKey"
    )
    
    try {
        # Convert API key to secure string
        $secureKey = ConvertTo-SecureString $apiKey -AsPlainText -Force
        
        # Store in Windows Credential Manager
        $credential = New-Object System.Management.Automation.PSCredential($CredentialName, $secureKey)
        $credential | Export-Clixml -Path "$env:USERPROFILE\$CredentialName.xml"
        
        Write-Host "✅ API key stored securely!" -ForegroundColor Green
        return $true
    } catch {
        Write-Host "❌ Error storing API key: $_" -ForegroundColor Red
        return $false
    }
}

# Retrieve API key securely
function Get-SecureApiKey {
    param(
        [string]$CredentialName = "OpenRouterApiKey"
    )
    
    try {
        $credential = Import-Clixml -Path "$env:USERPROFILE\$CredentialName.xml"
        $apiKey = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToBSTR($credential.Password))
        return $apiKey
    } catch {
        Write-Host "❌ Error retrieving API key: $_" -ForegroundColor Red
        return $null
    }
}

# Usage example
$apiKey = Read-Host "Enter your OpenRouter API key"
Set-SecureApiKey -ApiKey $apiKey

# Create .env file with secure API key
$secureApiKey = Get-SecureApiKey
if ($secureApiKey) {
    @"
OPENROUTER_API_KEY=$secureApiKey
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=deepseek/deepseek-r1:free
APP_URL=http://localhost:3000
APP_NAME=AI Interview Generator
DATABASE_URL="file:./dev.db"
"@ | Out-File -FilePath ".env" -Encoding UTF8
    
    Write-Host "✅ .env file created with secure API key!" -ForegroundColor Green
}
```

---

## 🔧 Method 5: Batch + PowerShell Hybrid

### Create a Setup Script

```powershell
# Save as Create-EnvFile.ps1
param(
    [string]$ApiKey,
    [string]$EnvFile = ".env",
    [switch]$Force
)

Write-Host "🚀 Creating environment file: $EnvFile" -ForegroundColor Cyan

# Check if file exists
if ((Test-Path $EnvFile) -and -not $Force) {
    $overwrite = Read-Host "File already exists. Overwrite? (y/N)"
    if ($overwrite -notmatch '^[Yy]$') {
        Write-Host "❌ Operation cancelled" -ForegroundColor Red
        exit 1
    }
}

# Get API key
if ([string]::IsNullOrEmpty($ApiKey)) {
    $ApiKey = Read-Host "Enter your OpenRouter API key"
}

# Validate API key
if ([string]::IsNullOrEmpty($ApiKey)) {
    Write-Host "❌ API key cannot be empty!" -ForegroundColor Red
    exit 1
}

# Create .env content
$envContent = @"
# OpenRouter Configuration
OPENROUTER_API_KEY=$ApiKey
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=deepseek/deepseek-r1:free

# Application Configuration
APP_URL=http://localhost:3000
APP_NAME=AI Interview Generator

# Database Configuration
DATABASE_URL="file:./dev.db"

# Created on: $(Get-Date -Format "yyyy-MM-dd HH:mm:ss")
"@

# Write to file
try {
    $envContent | Out-File -FilePath $EnvFile -Encoding UTF8
    Write-Host "✅ Environment file created successfully!" -ForegroundColor Green
    Write-Host "📍 Location: $(Resolve-Path $EnvFile)" -ForegroundColor Yellow
    
    # Test file creation
    if (Test-Path $EnvFile) {
        Write-Host "✅ File verification successful!" -ForegroundColor Green
        Write-Host "📏 File size: $((Get-Item $EnvFile).Length) bytes" -ForegroundColor Yellow
    }
} catch {
    Write-Host "❌ Error creating file: $_" -ForegroundColor Red
    exit 1
}
```

### Usage from Command Line

```powershell
# Interactive mode
.\Create-EnvFile.ps1

# With API key parameter
.\Create-EnvFile.ps1 -ApiKey "your_api_key_here"

# Force overwrite
.\Create-EnvFile.ps1 -Force

# Custom file name
.\Create-EnvFile.ps1 -EnvFile ".env.production"
```

---

## 🔧 Method 6: One-Liner Commands

### Quick .env Creation

```powershell
# One-liner .env creation
'OPENROUTER_API_KEY=your_api_key_here', 'OPENROUTER_BASE_URL=https://openrouter.ai/api/v1', 'OPENROUTER_MODEL=deepseek/deepseek-r1:free', 'APP_URL=http://localhost:3000', 'APP_NAME=AI Interview Generator', 'DATABASE_URL="file:./dev.db"' | Out-File .env -Encoding UTF8
```

### From Template

```powershell
# Copy from template in one line
Copy-Item .env.example .env; Write-Host "✅ .env file created from template!" -ForegroundColor Green
```

### With Random Secret

```powershell
# Create .env with random NextAuth secret
$secret = -join ((48..57) + (65..90) + (97..122) | Get-Random -Count 32 | ForEach-Object {[char]$_})
"NEXTAUTH_SECRET=$secret", "OPENROUTER_API_KEY=your_api_key_here" | Out-File .env -Encoding UTF8
```

---

## 🔧 Method 7: Using PowerShell Functions

### Reusable .env Creation Function

```powershell
# Add to your PowerShell profile
function New-EnvironmentFile {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$false)]
        [string]$FilePath = ".env",
        
        [Parameter(Mandatory=$false)]
        [string]$TemplatePath = ".env.example",
        
        [Parameter(Mandatory=$false)]
        [hashtable]$Variables = @{},
        
        [Parameter(Mandatory=$false)]
        [switch]$Force,
        
        [Parameter(Mandatory=$false)]
        [switch]$Interactive
    )
    
    Write-Host "🚀 Creating environment file: $FilePath" -ForegroundColor Cyan
    
    # Check if file exists
    if ((Test-Path $FilePath) -and -not $Force) {
        $overwrite = Read-Host "File already exists. Overwrite? (y/N)"
        if ($overwrite -notmatch '^[Yy]$') {
            Write-Host "❌ Operation cancelled" -ForegroundColor Red
            return
        }
    }
    
    # Start with template if exists
    $content = ""
    if (Test-Path $TemplatePath) {
        $content = Get-Content $TemplatePath -Raw
        Write-Host "📄 Using template: $TemplatePath" -ForegroundColor Yellow
    }
    
    # Interactive mode
    if ($Interactive) {
        $apiKey = Read-Host "Enter your OpenRouter API key"
        if (-not [string]::IsNullOrEmpty($apiKey)) {
            $Variables["OPENROUTER_API_KEY"] = $apiKey
        }
    }
    
    # Replace variables
    foreach ($key in $Variables.Keys) {
        $value = $Variables[$key]
        $pattern = "$key=.*"
        $replacement = "$key=$value"
        if ($content -match $pattern) {
            $content = $content -replace $pattern, $replacement
        } else {
            $content += "`n$key=$value"
        }
    }
    
    # Write file
    try {
        $content | Out-File -FilePath $FilePath -Encoding UTF8
        Write-Host "✅ Environment file created successfully!" -ForegroundColor Green
        Write-Host "📍 Location: $(Resolve-Path $FilePath)" -ForegroundColor Yellow
    } catch {
        Write-Host "❌ Error creating file: $_" -ForegroundColor Red
    }
}

# Usage examples
New-EnvironmentFile -Interactive
New-EnvironmentFile -Variables @{ "OPENROUTER_API_KEY" = "your_key" } -Force
New-EnvironmentFile -TemplatePath ".env.example" -Interactive
```

---

## 🔧 Method 8: Advanced with Error Handling

### Robust .env Creation Script

```powershell
function New-EnvFileAdvanced {
    [CmdletBinding()]
    param(
        [Parameter(Mandatory=$false)]
        [string]$FilePath = ".env",
        
        [Parameter(Mandatory=$false)]
        [string]$TemplatePath = ".env.example",
        
        [Parameter(Mandatory=$false)]
        [switch]$Force,
        
        [Parameter(Mandatory=$false)]
        [switch]$Interactive,
        
        [Parameter(Mandatory=$false)]
        [switch]$Validate,
        
        [Parameter(Mandatory=$false)]
        [string]$ApiKey
    )
    
    # Error handling
    $ErrorActionPreference = "Stop"
    
    try {
        Write-Host "🚀 Creating environment file: $FilePath" -ForegroundColor Cyan
        Write-Host "=====================================" -ForegroundColor Cyan
        
        # Check file existence
        if ((Test-Path $FilePath) -and -not $Force) {
            $overwrite = Read-Host "File already exists. Overwrite? (y/N)"
            if ($overwrite -notmatch '^[Yy]$') {
                Write-Host "❌ Operation cancelled" -ForegroundColor Red
                return
            }
        }
        
        # Get content
        $content = ""
        if (Test-Path $TemplatePath) {
            $content = Get-Content $TemplatePath -Raw
            Write-Host "📄 Using template: $TemplatePath" -ForegroundColor Yellow
        } else {
            Write-Host "⚠️  No template found, creating default content" -ForegroundColor Yellow
            $content = @"
# OpenRouter Configuration
OPENROUTER_API_KEY=
OPENROUTER_BASE_URL=https://openrouter.ai/api/v1
OPENROUTER_MODEL=deepseek/deepseek-r1:free

# Application Configuration
APP_URL=http://localhost:3000
APP_NAME=AI Interview Generator

# Database Configuration
DATABASE_URL="file:./dev.db"
"@
        }
        
        # Get API key
        if ([string]::IsNullOrEmpty($ApiKey)) {
            if ($Interactive) {
                $ApiKey = Read-Host "Enter your OpenRouter API key"
            } else {
                Write-Host "⚠️  No API key provided, leaving empty" -ForegroundColor Yellow
            }
        }
        
        # Replace API key
        if (-not [string]::IsNullOrEmpty($ApiKey)) {
            $content = $content -replace 'OPENROUTER_API_KEY=.*', "OPENROUTER_API_KEY=$ApiKey"
            Write-Host "✅ API key set" -ForegroundColor Green
        }
        
        # Validate content
        if ($Validate) {
            Write-Host "🔍 Validating content..." -ForegroundColor Yellow
            if ($content -match 'OPENROUTER_API_KEY=\s*$') {
                Write-Host "⚠️  Warning: API key is empty" -ForegroundColor Yellow
            }
            if ($content -match 'APP_URL=\s*$') {
                Write-Host "⚠️  Warning: APP_URL is empty" -ForegroundColor Yellow
            }
        }
        
        # Create directory if needed
        $directory = Split-Path $FilePath -Parent
        if (-not (Test-Path $directory)) {
            New-Item -ItemType Directory -Path $directory -Force | Out-Null
            Write-Host "📁 Created directory: $directory" -ForegroundColor Green
        }
        
        # Write file
        $content | Out-File -FilePath $FilePath -Encoding UTF8
        Write-Host "✅ Environment file created successfully!" -ForegroundColor Green
        Write-Host "📍 Location: $(Resolve-Path $FilePath)" -ForegroundColor Yellow
        
        # Show file info
        $fileInfo = Get-Item $FilePath
        Write-Host "📏 File size: $($fileInfo.Length) bytes" -ForegroundColor Yellow
        Write-Host "📅 Created: $($fileInfo.CreationTime)" -ForegroundColor Yellow
        
        # Test file
        if (Test-Path $FilePath) {
            Write-Host "✅ File verification successful!" -ForegroundColor Green
        }
        
    } catch {
        Write-Host "❌ Error: $_" -ForegroundColor Red
        Write-Host "📋 Stack trace: $($_.ScriptStackTrace)" -ForegroundColor Red
    }
}

# Usage examples
New-EnvFileAdvanced -Interactive -Validate
New-EnvFileAdvanced -ApiKey "your_key_here" -Force
New-EnvFileAdvanced -TemplatePath ".env.example" -Interactive -Validate
```

---

## 🎯 Best Practices

### File Management
```powershell
# Check if .env exists before creating
if (-not (Test-Path ".env")) {
    Write-Host "📝 Creating .env file..." -ForegroundColor Yellow
    # Your creation code here
} else {
    Write-Host "ℹ️  .env file already exists" -ForegroundColor Cyan
}

# Backup existing .env file
if (Test-Path ".env") {
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    Copy-Item ".env" ".env.backup_$timestamp"
    Write-Host "💾 Backed up existing .env file" -ForegroundColor Green
}
```

### Security Practices
```powershell
# Set file permissions (restrictive)
$acl = Get-Acl ".env"
$accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule(
    $env:USERNAME,
    "Read,Write",
    "None",
    "None",
    "Allow"
)
$acl.SetAccessRule($accessRule)
Set-Acl ".env" $acl

# Add to .gitignore if not already there
if (-not (Select-String -Path ".gitignore" -Pattern "^.env$" -Quiet)) {
    Add-Content ".gitignore" "`n.env"
    Write-Host "🔒 Added .env to .gitignore" -ForegroundColor Green
}
```

### Validation
```powershell
# Validate .env file structure
function Test-EnvFile {
    param([string]$FilePath = ".env")
    
    if (-not (Test-Path $FilePath)) {
        Write-Host "❌ .env file not found" -ForegroundColor Red
        return $false
    }
    
    $content = Get-Content $FilePath
    $requiredVars = @("OPENROUTER_API_KEY", "APP_URL")
    $missingVars = @()
    
    foreach ($var in $requiredVars) {
        if (-not ($content -match "^$var=")) {
            $missingVars += $var
        }
    }
    
    if ($missingVars.Count -gt 0) {
        Write-Host "❌ Missing required variables: $($missingVars -join ', ')" -ForegroundColor Red
        return $false
    }
    
    Write-Host "✅ .env file validation passed" -ForegroundColor Green
    return $true
}

# Usage
Test-EnvFile
```

---

## 🚀 Quick Start Commands

### For Immediate Use

```powershell
# Method 1: Simple creation
'OPENROUTER_API_KEY=your_key_here', 'OPENROUTER_BASE_URL=https://openrouter.ai/api/v1', 'OPENROUTER_MODEL=deepseek/deepseek-r1:free', 'APP_URL=http://localhost:3000', 'APP_NAME=AI Interview Generator', 'DATABASE_URL="file:./dev.db"' | Out-File .env -Encoding UTF8

# Method 2: From template
Copy-Item .env.example .env

# Method 3: Interactive (save as script first)
.\Create-EnvFile.ps1 -Interactive

# Method 4: Using function (copy function to PowerShell first)
New-EnvironmentFile -Interactive
```

### Choose the method that best fits your needs:
- **Beginner**: Method 1 or 2
- **Regular use**: Method 3 or 4
- **Advanced**: Method 7 or 8
- **Production**: Method 5 (secure)

---

## 🎉 Summary

You now have 8 different methods to create `.env` files in Windows PowerShell, ranging from simple one-liners to advanced secure scripts. Choose the method that best fits your needs and security requirements.

**For most users, I recommend:**
1. **Method 2** (Interactive) for regular development
2. **Method 5** (Secure) for production environments
3. **Method 7** (Function) for reusable workflows

Happy coding! 🚀