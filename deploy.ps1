# Portfolio Deployment Script
# This script commits and pushes changes to trigger automatic deployment

param(
    [string]$Message = ""
)

Write-Host ""
Write-Host "Portfolio Deployment Script" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Get the script directory (repository root)
$repoRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoRoot

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "Error: Not a git repository!" -ForegroundColor Red
    Write-Host "Please run this script from the repository root." -ForegroundColor Yellow
    exit 1
}

# Check for uncommitted changes
$status = git status --porcelain
if (-not $status) {
    Write-Host "No changes to commit." -ForegroundColor Green
    Write-Host "Your repository is up to date!" -ForegroundColor Gray
    exit 0
}

Write-Host "Changes detected:" -ForegroundColor Yellow
git status --short
Write-Host ""

# Get commit message if not provided
if ([string]::IsNullOrWhiteSpace($Message)) {
    Write-Host "Enter commit message (or press Enter for default): " -ForegroundColor Cyan -NoNewline
    $userInput = Read-Host
    
    if ([string]::IsNullOrWhiteSpace($userInput)) {
        $Message = "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
    } else {
        $Message = $userInput
    }
}

Write-Host ""
Write-Host "Staging all changes..." -ForegroundColor Cyan
git add .

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to stage changes!" -ForegroundColor Red
    exit 1
}

Write-Host "Changes staged" -ForegroundColor Green

Write-Host ""
Write-Host "Committing changes..." -ForegroundColor Cyan
git commit -m $Message

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to commit changes!" -ForegroundColor Red
    exit 1
}

Write-Host "Changes committed" -ForegroundColor Green

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push origin main

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to push to GitHub!" -ForegroundColor Red
    Write-Host "Please check your internet connection and git credentials." -ForegroundColor Yellow
    exit 1
}

Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green

Write-Host ""
Write-Host "Deployment triggered!" -ForegroundColor Green
Write-Host "GitHub Actions will now build and deploy your site." -ForegroundColor Gray
Write-Host ""
Write-Host "View progress at: https://github.com/quentinlampsy/quentinlampsy.github.io/actions" -ForegroundColor Cyan
Write-Host ""
Write-Host "Your site will be live at: https://quentinlampsy.github.io" -ForegroundColor Magenta
Write-Host "(It may take 1-2 minutes for changes to appear)" -ForegroundColor Gray
Write-Host ""
