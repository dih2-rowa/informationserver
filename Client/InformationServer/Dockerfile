FROM node:latest
WORKDIR /app

COPY . .
RUN npm install
RUN npm install -g @angular/cli@13.3.5

# COPY . /app
#RUN npm install @zxing/ngx-scanner@latest
RUN npm i @zxing/browser@latest --save
RUN npm i @zxing/library@latest --save
RUN npm i @zxing/ngx-scanner@3.5.0 --save
EXPOSE 4100

CMD ng serve  --host 0.0.0.0 --port 4100

