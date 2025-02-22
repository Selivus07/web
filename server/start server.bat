@echo off
cd C:\Users\chris\OneDrive\Documents\GitHub\web\server
:: Set up port forwarding (this is only local on your PC)
echo Setting up port forwarding on port 3052...
netsh interface portproxy add v4tov4 listenport=3052 listenaddress=0.0.0.0 connectport=3052 connectaddress=127.0.0.1

:: Start the server
echo Starting server on port 3052...
node server.js

:: Pause to keep the window open
pause
