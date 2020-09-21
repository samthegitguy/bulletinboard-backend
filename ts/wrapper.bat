echo off
dir *.ts /b /s > ts-files.txt
tsc @ts-files.txt --outdir ../js
del ts-files.txt
echo on