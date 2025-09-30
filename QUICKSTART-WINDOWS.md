# Quick Start Guide - Windows 11

## 🚀 5-Minute Setup for Lenovo T14s

### Prerequisites Check

Open PowerShell or Command Prompt and run:

```powershell
# Check Node.js
node --version

# Check npm
npm --version

# Check Git
git --version
```

If any of these are missing, install them first:
- [Node.js](https://nodejs.org/) (LTS version)
- [Git](https://git-scm.com/)

### Quick Setup

#### Option 1: Automated Setup (Recommended)

1. **Download the project files**
2. **Right-click** on `setup-windows.bat` and **Run as administrator**
3. **Follow the prompts**
4. **Edit `.env.local`** with your API keys

#### Option 2: Manual Setup

1. **Open PowerShell** in the project directory
2. **Install dependencies**:
   ```powershell
   npm install
   ```

3. **Setup environment**:
   ```powershell
   copy .env.example .env.local
   ```

4. **Edit `.env.local`** and add:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   NEXTAUTH_SECRET=your_nextauth_secret_here
   NEXTAUTH_URL=http://localhost:3000
   ```

5. **Start development server**:
   ```powershell
   npm run dev
   ```

6. **Open browser** to `http://localhost:3000`

### VS Code Setup

1. **Install VS Code** from [https://code.visualstudio.com/](https://code.visualstudio.com/)
2. **Install extensions**:
   - ESLint
   - Prettier
   - Prisma
   - Tailwind CSS IntelliSense
   - TypeScript Vue Plugin (Volar)

3. **Open project**:
   ```powershell
   code .
   ```

### Common Windows Issues & Solutions

#### Port 3000 Already in Use

```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F
```

#### Permission Issues

```powershell
# Run VS Code as administrator
# Or adjust folder permissions:
icacls "C:\path\to\project" /grant Everyone:F /T
```

#### Node.js Version Issues

```powershell
# Check current version
node --version

# Install nvm-windows for version management
# Download from: https://github.com/coreybutler/nvm-windows/releases
```

### Development Commands

```powershell
# Start development server
npm run dev

# Build for production
npm run build
npm start

# Code linting
npm run lint

# Database operations (if needed)
npx prisma generate
npx prisma db push
npx prisma studio
```

### Project Structure

```
ai-interview-question-generator/
├── src/
│   ├── app/                 # Next.js pages
│   ├── components/          # React components
│   ├── lib/                 # Utilities
│   └── types/               # TypeScript types
├── prisma/                  # Database schema
├── public/                  # Static files
├── .env.local              # Environment variables
├── package.json            # Dependencies
└── setup-windows.bat       # Windows setup script
```

### Getting API Keys

1. **OpenRouter API Key**:
   - Visit [https://openrouter.ai/](https://openrouter.ai/)
   - Create an account
   - Generate API key in dashboard

2. **NextAuth Secret**:
   ```powershell
   # Generate a random secret
   openssl rand -base64 32
   ```
   Or use an online generator

### Tips for Lenovo T14s

- **Performance**: The T14s has plenty of power for this project
- **Battery**: Development will use more battery - keep it plugged in
- **Keyboard**: The T14s keyboard is excellent for coding
- **Display**: High-res display is great for VS Code split views

### Need Help?

1. Check the error messages in the terminal
2. Review the full setup guide in `SETUP.md`
3. Search for solutions in the project's issue tracker

---

**Happy coding! 🚀**