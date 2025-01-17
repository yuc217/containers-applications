FROM node:20 as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

RUN npm run build
RUN npm install -g serve

CMD ["serve", "dist"]


FROM node:20 as test-stage

WORKDIR /app

COPY . .
RUN npm install

RUN npm test

FROM nginx:1.20-alpine
COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html