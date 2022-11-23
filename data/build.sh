#!/bin/sh
GOOS=windows go build -o generator_windows.exe
GOOS=darwin go build -o generator_macos
GOOS=linux go build -o generator_linux