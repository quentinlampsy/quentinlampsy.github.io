@echo off
REM Portfolio Deployment Script - Batch wrapper for PowerShell script
REM Double-click this file or run from command prompt

powershell -ExecutionPolicy Bypass -File "%~dp0deploy.ps1" %*
