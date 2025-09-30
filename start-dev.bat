@echo off
echo Starting AI Interview Question Generator Development Server
echo ==========================================================

:: Check if .env.local exists
if not exist .env.local (
    echo Error: .env.local file not found!
    echo Please run setup-windows.bat first or create the file manually.
    pause
    exit /b 1
)

:: Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies first...
    npm install
    if %errorlevel% neq 0 (
        echo Error: Failed to install dependencies!
        pause
        exit /b 1
    )
)

:: Start the development server
echo Starting development server...
echo Server will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

npm run dev