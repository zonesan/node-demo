FROM node:8.11-alpine

WORKDIR /app

ADD . /app

EXPOSE 8080

ENTRYPOINT ["node", "app.js"]
