FROM node:8.11-alpine

WORKDIR /app

ADD . /app

EXPOSE 3000

ENTRYPOINT ["node", "app.js"]
