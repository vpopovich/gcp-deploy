FROM node:12
WORKDIR /usr/app/src
COPY package*.json ./
RUN npm install --production
COPY src .
CMD ["node", "index.js"]
