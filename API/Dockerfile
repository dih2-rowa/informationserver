FROM python:latest
WORKDIR /app

COPY . .
RUN python -m pip install -r requirements.txt

EXPOSE 5011

CMD python3 main.py --host 0.0.0.0 --port 5011




# FROM node:latest
# WORKDIR /app

# COPY . .
# RUN npm install
# RUN npm install -g @angular/cli@13.3.5

# # COPY . /app

# EXPOSE 4100

# CMD ng serve  --host 0.0.0.0 --port 4100
