FROM node:latest
WORKDIR /app

COPY . .
RUN npm install
RUN npm install -g @angular/cli@13.3.5

# COPY . /app

EXPOSE 4100

CMD ng serve  --host 0.0.0.0 --port 4100

