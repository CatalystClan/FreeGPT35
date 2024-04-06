FROM node:alpine

ARG AUTH_TOKEN
ENV AUTH_TOKEN=${AUTH_TOKEN}

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install --only=production

EXPOSE 3040

CMD ["node", "app.js"]