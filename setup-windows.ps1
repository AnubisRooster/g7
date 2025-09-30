# AI Interview Question Generator - Windows Setup Script
# This script sets up the development environment on Windows 11

param(
    [switch]$SkipVSCode,
    [switch]$Force
)

Write-Host "🚀 Setting up AI Interview Question Generator on Windows 11" -ForegroundColor Green
Write-Host "=============================================================" -ForegroundColor Green

# Function to check if a command exists
function Test-Command {
    param($Command)
    $null = Get-Command $Command -ErrorAction SilentlyContinue
    return $?
}

# Function to install Chocolatey if not present
function Install-Chocolatey {
    if (-not (Test-Command choco)) {
        Write-Host "📦 Installing Chocolatey package manager..." -ForegroundColor Yellow
        Set-ExecutionPolicy Bypass -Scope Process -Force
        [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
        iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
        
        if (-not (Test-Command choco)) {
            Write-Host "❌ Failed to install Chocolatey" -ForegroundColor Red
            return $false
        }
        Write-Host "✅ Chocolatey installed successfully" -ForegroundColor Green
        return $true
    }
    return $true
}

# Function to install software via Chocolatey
function Install-ChocoPackage {
    param($PackageName, $DisplayName)
    
    if (-not (Test-Command $PackageName)) {
        Write-Host "📦 Installing $DisplayName..." -ForegroundColor Yellow
        choco install $PackageName -y
        
        if (-not (Test-Command $PackageName)) {
            Write-Host "❌ Failed to install $DisplayName" -ForegroundColor Red
            return $false
        }
        Write-Host "✅ $DisplayName installed successfully" -ForegroundColor Green
        return $true
    }
    Write-Host "✅ $DisplayName is already installed" -ForegroundColor Green
    return $true
}

# Check prerequisites
Write-Host "🔍 Checking prerequisites..." -ForegroundColor Cyan

# Check Node.js
if (-not (Test-Command node)) {
    Write-Host "❌ Node.js is not installed" -ForegroundColor Red
    $installChoco = Read-Host "Would you like to install Node.js via Chocolatey? (y/N)"
    if ($installChoco -match '^[Yy]$') {
        if (Install-Chocolatey) {
            Install-ChocoPackage -PackageName "nodejs" -DisplayName "Node.js"
        }
    } else {
        Write-Host "Please download and install Node.js from https://nodejs.org/" -ForegroundColor Yellow
        exit 1
    }
} else {
    $nodeVersion = node --version
    Write-Host "✅ Node.js is installed (version: $nodeVersion)" -ForegroundColor Green
}

# Check npm
if (-not (Test-Command npm)) {
    Write-Host "❌ npm is not installed" -ForegroundColor Red
    exit 1
} else {
    $npmVersion = npm --version
    Write-Host "✅ npm is installed (version: $npmVersion)" -ForegroundColor Green
}

# Check Git
if (-not (Test-Command git)) {
    Write-Host "❌ Git is not installed" -ForegroundColor Red
    $installChoco = Read-Host "Would you like to install Git via Chocolatey? (y/N)"
    if ($installChoco -match '^[Yy]$') {
        if (Install-Chocolatey) {
            Install-ChocoPackage -PackageName "git" -DisplayName "Git"
        }
    } else {
        Write-Host "Please download and install Git from https://git-scm.com/" -ForegroundColor Yellow
        exit 1
    }
} else {
    $gitVersion = git --version
    Write-Host "✅ Git is installed (version: $gitVersion)" -ForegroundColor Green
}

# Install VS Code extensions if VS Code is installed
if (-not $SkipVSCode -and (Test-Command code)) {
    Write-Host "🔧 Installing VS Code extensions..." -ForegroundColor Cyan
    
    $extensions = @(
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "Prisma.prisma",
        "bradlc.vscode-tailwindcss",
        "Vue.volar"
    )
    
    foreach ($ext in $extensions) {
        Write-Host "Installing $ext..." -ForegroundColor Yellow
        code --install-extension $ext
    }
    Write-Host "✅ VS Code extensions installed" -ForegroundColor Green
}

# Install npm dependencies
Write-Host "📦 Installing project dependencies..." -ForegroundColor Cyan
try {
    npm install
    Write-Host "✅ Dependencies installed successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}

# Create environment file if it doesn't exist
if (-not (Test-Path ".env.local") -or $Force) {
    Write-Host "📝 Creating environment file..." -ForegroundColor Cyan
    Copy-Item ".env.example" ".env.local" -Force
    Write-Host "✅ Environment file created: .env.local" -ForegroundColor Green
    Write-Host "⚠️  IMPORTANT: Please edit .env.local and add your API keys:" -ForegroundColor Yellow
    Write-Host "   - OPENROUTER_API_KEY=your_openrouter_api_key_here" -ForegroundColor Yellow
    Write-Host "   - NEXTAUTH_SECRET=your_nextauth_secret_here" -ForegroundColor Yellow
    Write-Host "   - NEXTAUTH_URL=http://localhost:3000" -ForegroundColor Yellow
} else {
    Write-Host "✅ Environment file already exists" -ForegroundColor Green
}

# Generate Prisma client
Write-Host "🗄️  Generating Prisma client..." -ForegroundColor Cyan
try {
    npx prisma generate
    Write-Host "✅ Prisma client generated successfully" -ForegroundColor Green
} catch {
    Write-Host "⚠️  Warning: Prisma client generation failed, but continuing..." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎉 Setup completed successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Edit .env.local and add your API keys" -ForegroundColor Cyan
Write-Host "2. Run 'npm run dev' to start the development server" -ForegroundColor Cyan
Write-Host "3. Open http://localhost:3000 in your browser" -ForegroundColor Cyan
Write-Host ""

# Ask if user wants to open VS Code
if (-not $SkipVSCode -and (Test-Command code)) {
    $openVSCode = Read-Host "Would you like to open the project in VS Code? (Y/n)"
    if ($openVSCode -notmatch '^[Nn]$') {
        Write-Host "Opening project in VS Code..." -ForegroundColor Cyan
        code .
    }
}

Write-Host "Happy coding! 🚀" -ForegroundColor Green