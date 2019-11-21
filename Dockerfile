FROM node:dubnium-alpine

# Build webpack package
WORKDIR /usr/src/shuttle_PWA
COPY package*.json ./
RUN yarn

COPY . .
RUN yarn build

# Run with express generator
WORKDIR /usr/src/shuttle_PWA_www
RUN yarn add express-generator forever -g
RUN cp -r ../shuttle_PWA/dist/static ./public
RUN cp -r ../shuttle_PWA/dist/index.html ./public

EXPOSE 8080

CMD ["forever", "bin/www"]