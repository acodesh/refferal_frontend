#!/bin/bash 
set -e

source ~/.nvm/nvm.sh

# go to the directory
echo "Going to directory"
cd /var/www/html/AdizFront

echo "Removing the server"
rm -rf node_modules

echo "Installing node"
node -v

echo "Installing node modules"
npm install
 
echo "installing pm2"
npm install pm2

npm run build

#Restart the node server  
echo "server reset"
pm2 start ecosystem.config.js
