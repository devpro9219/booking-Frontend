
cd /src

if [ "$NODE_ENV" == 'development' ];
then
    npm run start:local
    npm start
else
    npm run build
    pm2-docker pm2.json
fi
