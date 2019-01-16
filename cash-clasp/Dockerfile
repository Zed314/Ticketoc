FROM node:lts-alpine
RUN apk add --no-cache bash
WORKDIR /usr/src/app
COPY . ./
RUN npm install
CMD ["node", "app.js"]
