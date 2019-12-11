FROM node:12.3.1
WORKDIR /usr/src/app
COPY package.json .
COPY tsconfig.json .
RUN npm install --verbose
RUN npm rebuild node-sass
COPY . .

RUN tsc

RUN ls -la

EXPOSE 3000