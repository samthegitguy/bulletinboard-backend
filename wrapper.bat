echo off
echo Wrapper starting...
echo Changing directory...
cd ts
echo done
echo Writing directory...
dir *.ts /b /s > directory.txt
echo done
echo Compiling TS...
tsc @directory.txt --outdir ../js
echo done
echo Deleting orphaned files...
del directory.txt
echo Moving back to project root...
cd ..
echo done
echo Moving to js files folder...
cd js
echo done
echo Starting server...
echo on
node index.js
echo off
echo Server stopped
echo Moving to project root.
cd ..
echo done
echo on