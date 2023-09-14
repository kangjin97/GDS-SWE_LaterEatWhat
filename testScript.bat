@echo off
setlocal enabledelayedexpansion

:: Initialize an empty list of URLs
set "urls="

:menu
cls
echo 1. Add URL
echo 2. Remove URL
echo 3. Get All URLs
echo 4. Exit

set /p choice=Enter your choice: 

:: Perform actions based on user choice
if "%choice%"=="1" (
    set /p url=Enter URL to add: 
    :: Append the URL to the list
    set "urls=!urls! %url%"
    echo URL added: %url%
    pause
    goto menu
) elseif "%choice%"=="2" (
    set /p url=Enter URL to remove: 
    :: Remove the URL from the list
    set "urls=!urls: %url%=!"
    echo URL removed: %url%
    pause
    goto menu
) elseif "%choice%"=="3" (
    :: Display all URLs in the list
    echo All URLs:
    echo %urls%
    pause
    goto menu
) elseif "%choice%"=="4" (
    :: Exit the script
    exit /b 0
) else (
    echo Invalid choice. Please try again.
    pause
    goto menu
)
