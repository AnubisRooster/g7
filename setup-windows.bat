@echo off
echo Setting up AI Interview Question Generator on Windows 11
echo =========================================================

:: Check if Node.js is installed
echo Checking Node.js installation...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Node.js is not installed!
    echo Please download and install Node.js from https://nodejs.org/
    pause
    exit /b 1
)
echo Node.js is installed
node --version

:: Check if npm is installed
echo Checking npm installation...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: npm is not installed!
    pause
    exit /b 1
)
echo npm is installed
npm --version

:: Check if Git is installed
echo Checking Git installation...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Git is not installed!
    echo Please download and install Git from https://git-scm.com/
    pause
    exit /b 1
)
echo Git is installed
git --version

:: Install dependencies
echo.
echo Installing project dependencies...
npm install
if %errorlevel% neq 0 (
    echo Error: Failed to install dependencies!
    pause
    exit /b 1
)
echo Dependencies installed successfully

:: Create environment file if it doesn't exist
if not exist .env.local (
    echo.
    echo Creating environment file...
    copy .env.example .env.local
    echo Environment file created: .env.local
    echo.
    echo IMPORTANT: Please edit .env.local and add your API keys:
    echo - OPENROUTER_API_KEY=your_openrouter_api_key_here
    echo - NEXTAUTH_SECRET=your_nextauth_secret_here
    echo - NEXTAUTH_URL=http://localhost:3000
) else (
    echo Environment file already exists
)

:: Generate Prisma client
echo.
echo Generating Prisma client...
npx prisma generate
if %errorlevel% neq 0 (
    echo Warning: Prisma client generation failed, but continuing...
)

echo.
echo Setup completed successfully!
echo.
echo Next steps:
echo 1. Edit .env.local and add your API keys
echo 2. Run 'npm run dev' to start the development server
echo 3. Open http://localhost:3000 in your browser
echo.
echo Press any key to open the project in VS Code...
pause >nul

:: Open VS Code
echo Opening project in VS Code...
code .

echo Setup complete! VS Code should now open with the project.