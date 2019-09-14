@echo off

REM Remove The Contents of the www/
del "www/" /s /f /q
echo "ALL www contents deleted"

REM Compile the TypeScript Files
tsc
echo "Compile Successfully"

