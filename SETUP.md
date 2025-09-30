# AI Interview Question Generator - Windows 11 Setup Guide

This guide will help you set up the AI Interview Question Generator project on your Lenovo T14s running Windows 11 using VS Code.

## Prerequisites

1. **Windows 11** (already installed on your Lenovo T14s)
2. **Visual Studio Code** - Download from [https://code.visualstudio.com/](https://code.visualstudio.com/)
3. **Node.js** (v18 or later) - Download from [https://nodejs.org/](https://nodejs.org/)
4. **Git** - Download from [https://git-scm.com/](https://git-scm.com/)

## Installation Steps

### 1. Install Required Software

#### Visual Studio Code
1. Download VS Code from the official website
2. Run the installer and follow the installation wizard
3. Launch VS Code after installation

#### Node.js
1. Download the LTS version of Node.js from the official website
2. Run the installer and follow the installation wizard
3. Verify installation by opening Command Prompt or PowerShell and running:
   ```bash
   node --version
   npm --version
   ```

#### Git
1. Download Git from the official website
2. Run the installer and follow the installation wizard
3. Verify installation by opening Command Prompt or PowerShell and running:
   ```bash
   git --version
   ```

### 2. Clone the Repository

1. Open Command Prompt or PowerShell
2. Navigate to your desired project directory (e.g., `cd C:\Projects`)
3. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-interview-question-generator
   ```

### 3. Install Project Dependencies

1. In the project directory, run:
   ```bash
   npm install
   ```

### 4. Configure Environment Variables

1. Create a copy of the environment template:
   ```bash
   copy .env.example .env.local
   ```

2. Edit `.env.local` file with your API keys:
   ```
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   NEXTAUTH_SECRET=your_nextauth_secret_here
   NEXTAUTH_URL=http://localhost:3000
   ```

### 5. Install VS Code Extensions

Launch VS Code and install these recommended extensions:

1. **ESLint** - For code linting
   - Extension ID: `dbaeumer.vscode-eslint`

2. **Prettier - Code formatter** - For code formatting
   - Extension ID: `esbenp.prettier-vscode`

3. **Prisma** - For database management
   - Extension ID: `Prisma.prisma`

4. **Tailwind CSS IntelliSense** - For Tailwind CSS support
   - Extension ID: `bradlc.vscode-tailwindcss`

5. **TypeScript Vue Plugin (Volar)** - For TypeScript support
   - Extension ID: `Vue.volar`

### 6. Run the Development Server

1. Open the project folder in VS Code
2. Open the integrated terminal (View > Terminal or `Ctrl + \``)
3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`

## Windows-Specific Considerations

### PowerShell Execution Policy

If you encounter execution policy issues with PowerShell scripts:

1. Open PowerShell as Administrator
2. Run the following command:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

### Environment Variables in Windows

For persistent environment variables in Windows:

1. Press `Windows + R` and type `sysdm.cpl`
2. Go to the "Advanced" tab and click "Environment Variables"
3. Add your API keys under "User variables for [your username]"

### Git Configuration

Configure Git with your user information:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Troubleshooting Common Issues

### Port 3000 Already in Use

If you encounter an error that port 3000 is already in use:

1. Find the process using the port:
   ```bash
   netstat -ano | findstr :3000
   ```

2. Terminate the process using its PID (Process ID):
   ```bash
   taskkill /PID <PID> /F
   ```

### Node.js Version Issues

Ensure you're using the correct Node.js version:

1. Check your current version:
   ```bash
   node --version
   ```

2. If you need to manage multiple Node.js versions, consider installing `nvm-windows`:
   - Download from: https://github.com/coreybutler/nvm-windows/releases
   - Install and use desired Node.js version

### Permission Issues

If you encounter permission-related errors:

1. Try running VS Code as Administrator
2. Or adjust your project folder permissions:
   ```bash
   icacls "C:\path\to\project" /grant Everyone:F /T
   ```

## Development Workflow

### Running the Development Server

```bash
npm run dev
```

### Building for Production

```bash
npm run build
npm start
```

### Code Linting

```bash
npm run lint
```

### Database Operations (if needed)

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to database
npx prisma db push

# View database
npx prisma studio
```

## Project Structure Overview

```
ai-interview-question-generator/
├── src/
│   ├── app/                 # Next.js App Router
│   ├── components/          # React components
│   ├── lib/                 # Utility functions
│   └── types/               # TypeScript type definitions
├── prisma/                  # Database schema
├── public/                  # Static assets
├── .env.local              # Environment variables (not committed)
├── package.json            # Project dependencies
└── README.md               # Project documentation
```

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [VS Code Documentation](https://code.visualstudio.com/docs)

## Support

If you encounter any issues during setup:

1. Check the error messages in the terminal
2. Review the project's README.md for specific instructions
3. Search for solutions in the project's issue tracker
4. Contact the project maintainers for assistance

---

Happy coding! 🚀