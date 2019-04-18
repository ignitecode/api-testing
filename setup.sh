#!/usr/bin/env bash

echo "[INFO] Setting up project please be patient..."
npm install
createdb api_testing
sequelize db:migrate
sequelize db:seed:all

if [[ $? -eq 0 ]]; then
  echo "[INFO] Your project has been setup successfully run npm start to get started!"
else
  echo "[ERROR] Your project had some issues getting setup check the log for more details."
fi
