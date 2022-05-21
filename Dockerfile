FROM node:14-alpine
WORKDIR /usr/app
COPY . .
RUN npm i
RUN chown -R root:root /usr/app
CMD ["npm","run", "start:mock"]
