FROM node:14-alpine
WORKDIR /usr/app
COPY . .
RUN chown -R root:root /usr/app
CMD ["npm","start"]
