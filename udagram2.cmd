@echo off

REM Copy The Config files to www\
copy src\config\config.js www\config
echo "Copy Config Successfully"

REM Copy The .npmrc file to www\
copy .npmrc www\.npmrc
echo "Copy .npmrc Successfully"

REM Copy The package.json to www\
copy package.json www\package.json
echo "Copy package.json Successfully"

echo "All tasks Complete Successfully!"
