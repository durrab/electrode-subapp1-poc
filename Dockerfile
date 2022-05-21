FROM node:14-alpine3.14
WORKDIR /usr/app
COPY package.json ./
COPY . .
RUN npm install
RUN chown -R root:root /usr/app
EXPOSE 3000
CMD ["npm","start"]
