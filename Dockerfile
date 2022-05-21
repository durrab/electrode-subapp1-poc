FROM node:14-alpine
WORKDIR /usr/app
COPY . .
RUN npm i -g fyn
RUN fyn
RUN chown -R root:root /usr/app
CMD ["npm","start"]
