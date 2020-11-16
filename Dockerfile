FROM node:15-alpine as client

WORKDIR /app
ADD ./client ./client
WORKDIR /app/client
RUN npm i && npm run build

FROM node:15-alpine as server

WORKDIR /app
ADD ./src ./src
COPY package.json .
COPY tsconfig.json .
RUN npm i -g typescript && npm i && tsc

FROM node:15-alpine
WORKDIR /app
COPY package.json .
COPY --from=client /app/client/build ./build
COPY --from=server /app/dist ./dist
RUN npm i --only=production
EXPOSE 4000

CMD npm run prod