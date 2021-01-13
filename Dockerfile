FROM node:12

WORKDIR /app
COPY src /app/src
COPY data /app/data
COPY knexfile.js /app
COPY package.json /app
COPY package-lock.json /app

RUN npm install

CMD [ "npm", "start" ]
