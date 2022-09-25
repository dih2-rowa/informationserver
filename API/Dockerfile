FROM node:12.18-alpine
WORKDIR /app

COPY . .

# COPY . /app
#RUN npm install @zxing/ngx-scanner@latest
# RUN npm i @zxing/browser@latest --save
# RUN npm i @zxing/library@latest --save
# RUN npm i @zxing/ngx-scanner@3.5.0 --save

        # "crate-connect": "^0.1.51",
        # "express": "^4.18.1",
        # "multer": "^1.4.5-lts.1",
        # "node-crate": "^2.0.6",
        # "nodemon": "^2.0.19",
        # "pg": "^8.7.3"
# RUN npm i nodemon
# RUN npm i multer
# RUN npm i express
# RUN npm i crate-connect
RUN npm install
RUN npm i nodemon -g
EXPOSE 4100

CMD nodemon ./server.js

