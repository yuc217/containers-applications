FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV DEBUG=app:*

EXPOSE 3000

CMD npm start