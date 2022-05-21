FROM node:14-alpine3.14
WORKDIR /usr/app
COPY package.json ./
COPY . .
RUN chown -R root:root /usr/app
RUN npm i -g fyn
RUN fyn
RUN fun build
CMD ["npm","start"]
