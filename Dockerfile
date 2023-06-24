FROM node:16-alpine

RUN mkdir -p /nodejs-app

WORKDIR /nodejs-app

COPY . .

RUN npm install

CMD ["npm", "start"]