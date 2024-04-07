FROM node:alpine

ARG AUTH_TOKEN
ENV AUTH_TOKEN=${AUTH_TOKEN}

ENV TZ=Asia/Shanghai

WORKDIR /usr/src/app

COPY package*.json ./
COPY . .

RUN npm install --only=production
RUN npm install -g pm2

EXPOSE 3040

CMD ["pm2-runtime", "app.js", "-i", "max"]