module.exports = {
  apps : [
     {
       name          : 'AdizFrontend',
       script        : 'npx',
       interpreter   : 'none',
       args          : 'serve build -s',
       env_production : {
         NODE_ENV: 'production'
       }
     }
   ]
};
