# Fixing "npm is not recognized" Error on Windows 11

This error means Node.js (which includes npm) is not installed or not properly configured in your system PATH.

## 🔍 Quick Diagnosis

### Check if Node.js is installed
Open PowerShell or Command Prompt and run:

```powershell
# Check Node.js
node --version

# Check npm
npm --version
```

If both commands return version numbers, Node.js is installed but PATH is misconfigured.
If both return "not recognized", Node.js is not installed.

---

## 🚀 Solution 1: Install Node.js (Recommended)

### Step 1: Download Node.js
1. Visit [https://nodejs.org/](https://nodejs.org/)
2. Download the **LTS** version (Long Term Support) - this is recommended for most users
3. Run the installer

### Step 2: Install Node.js
1. **Double-click** the downloaded `.msi` file
2. **Accept** the license agreement
3. **IMPORTANT**: Make sure "Add to PATH" is checked ✅
4. **Click Next** through all the default options
5. **Click Install** and wait for completion
6. **Click Finish**

### Step 3: Verify Installation
**Close and reopen PowerShell/Command Prompt**, then run:

```powershell
node --version
npm --version
```

You should see version numbers like:
```
v20.18.0
10.8.2
```

### Step 4: Run npm install
Now you can run:

```powershell
npm install
```

---

## 🔧 Solution 2: Fix PATH Issues (If Node.js is already installed)

If Node.js is installed but npm is not recognized, follow these steps:

### Method 1: Check PATH Environment Variable

1. **Press Windows + R** and type `sysdm.cpl`
2. **Go to Advanced tab** → **Environment Variables**
3. **Under "System variables"**, find and select **Path**
4. **Click Edit**
5. **Check if these paths exist**:
   ```
   C:\Program Files\nodejs\
   C:\Program Files\nodejs\node_modules\npm\bin
   ```
6. **If missing, add them**:
   - Click **New**
   - Add `C:\Program Files\nodejs\`
   - Click **New** again
   - Add `C:\Program Files\nodejs\node_modules\npm\bin`
   - Click **OK** on all windows

### Method 2: Using PowerShell (Quick Fix)

```powershell
# Add Node.js to PATH for current session
$env:PATH += ";C:\Program Files\nodejs"
$env:PATH += ";C:\Program Files\nodejs\node_modules\npm\bin"

# Test
npm --version

# If it works, make it permanent
[Environment]::SetEnvironmentVariable("PATH", $env:PATH, "Machine")
```

### Method 3: Reinstall Node.js (Most Reliable)

1. **Uninstall existing Node.js**:
   - Press **Windows + R** and type `appwiz.cpl`
   - Find **Node.js** in the list
   - Right-click → **Uninstall**

2. **Download fresh installer** from [nodejs.org](https://nodejs.org/)

3. **Install with PATH enabled** (make sure "Add to PATH" is checked)

---

## 🛠️ Solution 3: Using Package Managers (Advanced)

### Option 1: Chocolatey (Recommended for Windows)

```powershell
# Install Chocolatey (if not already installed)
Set-ExecutionPolicy Bypass -Scope Process -Force
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# Install Node.js using Chocolatey
choco install nodejs-lts -y

# Verify installation
node --version
npm --version
```

### Option 2: Winget (Windows 10/11 built-in)

```powershell
# Install Node.js using Winget
winget install OpenJS.NodeJS.LTS

# Verify installation
node --version
npm --version
```

---

## 🔄 Solution 4: Restart and Refresh

### Method 1: Restart PowerShell/Command Prompt
1. **Close all PowerShell/Command Prompt windows**
2. **Open new PowerShell/Command Prompt**
3. **Test npm**:
   ```powershell
   npm --version
   ```

### Method 2: Restart Explorer
1. **Open Task Manager** (Ctrl+Shift+Esc)
2. **Find "Windows Explorer"** in the Processes tab
3. **Right-click → Restart**
4. **Open new PowerShell/Command Prompt**
5. **Test npm**

### Method 3: Restart Computer
If nothing else works, restart your computer:
```powershell
Restart-Computer -Force
```

---

## 📋 Complete Setup Script

Save this as `setup-nodejs.ps1` and run it:

```powershell
# Setup Node.js and npm for Windows
Write-Host "🚀 Setting up Node.js and npm..." -ForegroundColor Cyan

# Check if Node.js is already installed
try {
    $nodeVersion = node --version 2>$null
    $npmVersion = npm --version 2>$null
    
    if ($nodeVersion -and $npmVersion) {
        Write-Host "✅ Node.js is already installed!" -ForegroundColor Green
        Write-Host "   Node.js version: $nodeVersion" -ForegroundColor Yellow
        Write-Host "   npm version: $npmVersion" -ForegroundColor Yellow
        return
    }
} catch {
    Write-Host "⚠️  Node.js not found, proceeding with installation..." -ForegroundColor Yellow
}

# Ask user for installation method
Write-Host "`nChoose installation method:" -ForegroundColor Cyan
Write-Host "1. Install Node.js manually (recommended)" -ForegroundColor White
Write-Host "2. Install using Chocolatey" -ForegroundColor White
Write-Host "3. Install using Winget" -ForegroundColor White

$choice = Read-Host "`nEnter your choice (1-3)"

switch ($choice) {
    "1" {
        Write-Host "`n📥 Manual installation selected" -ForegroundColor Yellow
        Write-Host "1. Download Node.js LTS from: https://nodejs.org/" -ForegroundColor White
        Write-Host "2. Run the installer" -ForegroundColor White
        Write-Host "3. Make sure 'Add to PATH' is checked ✅" -ForegroundColor White
        Write-Host "4. Complete the installation" -ForegroundColor White
        Write-Host "5. Close and reopen this PowerShell" -ForegroundColor White
        
        $continue = Read-Host "`nPress Enter after installation is complete"
        
        # Verify installation
        try {
            $nodeVersion = node --version
            $npmVersion = npm --version
            Write-Host "✅ Installation successful!" -ForegroundColor Green
            Write-Host "   Node.js version: $nodeVersion" -ForegroundColor Yellow
            Write-Host "   npm version: $npmVersion" -ForegroundColor Yellow
        } catch {
            Write-Host "❌ Installation failed or PATH not updated" -ForegroundColor Red
            Write-Host "Please restart your computer and try again" -ForegroundColor Yellow
        }
    }
    
    "2" {
        Write-Host "`n📦 Installing via Chocolatey..." -ForegroundColor Yellow
        
        # Check if Chocolatey is installed
        if (-not (Get-Command choco -ErrorAction SilentlyContinue)) {
            Write-Host "Installing Chocolatey..." -ForegroundColor Yellow
            Set-ExecutionPolicy Bypass -Scope Process -Force
            [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072
            iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
        }
        
        # Install Node.js
        choco install nodejs-lts -y
        
        # Verify installation
        try {
            $nodeVersion = node --version
            $npmVersion = npm --version
            Write-Host "✅ Installation successful!" -ForegroundColor Green
            Write-Host "   Node.js version: $nodeVersion" -ForegroundColor Yellow
            Write-Host "   npm version: $npmVersion" -ForegroundColor Yellow
        } catch {
            Write-Host "❌ Installation failed" -ForegroundColor Red
            Write-Host "Please restart PowerShell and try again" -ForegroundColor Yellow
        }
    }
    
    "3" {
        Write-Host "`n📦 Installing via Winget..." -ForegroundColor Yellow
        
        # Install Node.js
        winget install OpenJS.NodeJS.LTS
        
        # Verify installation
        try {
            $nodeVersion = node --version
            $npmVersion = npm --version
            Write-Host "✅ Installation successful!" -ForegroundColor Green
            Write-Host "   Node.js version: $nodeVersion" -ForegroundColor Yellow
            Write-Host "   npm version: $npmVersion" -ForegroundColor Yellow
        } catch {
            Write-Host "❌ Installation failed" -ForegroundColor Red
            Write-Host "Please restart PowerShell and try again" -ForegroundColor Yellow
        }
    }
    
    default {
        Write-Host "❌ Invalid choice" -ForegroundColor Red
        exit 1
    }
}

# Test npm install
Write-Host "`n🧪 Testing npm install..." -ForegroundColor Cyan
try {
    npm install
    Write-Host "✅ npm install completed successfully!" -ForegroundColor Green
} catch {
    Write-Host "❌ npm install failed" -ForegroundColor Red
    Write-Host "Please check the error message above" -ForegroundColor Yellow
}
```

---

## 🔍 Troubleshooting

### Issue: Still not working after installation
**Solution**: Restart your computer and try again.

### Issue: PATH not updated
**Solution**: Manually add Node.js to PATH:
1. **Windows + R** → `sysdm.cpl`
2. **Advanced** → **Environment Variables**
3. **System variables** → **Path** → **Edit**
4. **Add**: `C:\Program Files\nodejs\`
5. **Add**: `C:\Program Files\nodejs\node_modules\npm\bin`
6. **OK** → **OK** → **OK**

### Issue: Multiple Node.js versions
**Solution**: Uninstall all versions and reinstall fresh:
```powershell
# Uninstall all Node.js versions
winget uninstall OpenJS.NodeJS
winget uninstall OpenJS.NodeJS.LTS

# Install fresh
winget install OpenJS.NodeJS.LTS
```

### Issue: Permission errors
**Solution**: Run PowerShell as Administrator:
1. **Right-click PowerShell** → **Run as administrator**
2. **Run commands**:
   ```powershell
   npm install
   ```

---

## 🎯 Quick Fix Commands

### Test if Node.js is installed
```powershell
# Test Node.js
node --version

# Test npm
npm --version

# If both work, run:
npm install
```

### Quick PATH fix (temporary)
```powershell
# Add to current session
$env:PATH += ";C:\Program Files\nodejs"
$env:PATH += ";C:\Program Files\nodejs\node_modules\npm\bin"

# Test
npm --version
```

### Permanent PATH fix
```powershell
# Add to system PATH permanently
[Environment]::SetEnvironmentVariable("PATH", $env:PATH + ";C:\Program Files\nodejs;C:\Program Files\nodejs\node_modules\npm\bin", "Machine")

# Restart PowerShell to apply
```

---

## 🚀 After Installation

Once npm is working, continue with your project setup:

```powershell
# Navigate to your project directory
cd C:\path\to\your\project

# Install dependencies
npm install

# Create .env file
Copy-Item .env.example .env

# Start development server
npm run dev
```

---

## 📞 Need Help?

If you're still having issues:

1. **Check Node.js installation**: Visit [https://nodejs.org/](https://nodejs.org/)
2. **Windows documentation**: [Node.js Windows Guide](https://nodejs.org/en/docs/guides/getting-started-guide-windows/)
3. **Community support**: [Node.js Discord](https://discord.gg/nodejs)

---

## 🎉 Summary

The "npm is not recognized" error is almost always caused by:
1. **Node.js not installed** (most common)
2. **PATH not configured** properly
3. **PowerShell session** not refreshed

**Follow these steps:**
1. **Install Node.js LTS** from nodejs.org
2. **Make sure "Add to PATH" is checked** during installation
3. **Restart PowerShell/Command Prompt**
4. **Test with `npm --version`**
5. **Run `npm install`**

You'll be up and running in no time! 🚀