# Clean up unnecessary files
Remove-Item -Path ".next" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path ".vscode" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue

# Create optimized project structure
$essentialFiles = @(
    "src/app/layout.tsx",
    "src/app/page.tsx",
    "src/app/globals.css",
    "src/app/components",
    "public",
    "package.json",
    "tsconfig.json",
    "tailwind.config.js",
    "postcss.config.js",
    ".gitignore"
)

# Remove any files not in the essential list
Get-ChildItem -Path . -Recurse -File | 
    Where-Object { $_.FullName -notmatch ($essentialFiles -join '|') } |
    Remove-Item -Force

# Install only production dependencies
npm install --production 