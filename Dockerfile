FROM node:12.18.1

WORKDIR /code-service

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install

COPY . .

ENV PORT 8080
EXPOSE 8080

CMD [ "node", "server.js" ]