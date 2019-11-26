FROM node:dubnium-alpine

# Build webpack package
WORKDIR /usr/src/shuttle_PWA
COPY package*.json ./
RUN yarn

COPY . .
RUN yarn build

# Run with express generator
RUN npm install express-generator -g
RUN npm install forever -g
WORKDIR /usr/src
RUN express --no-view shuttle_web
WORKDIR /usr/src/shuttle_web
RUN yarn
RUN cp -r ../shuttle_PWA/dist/static ./public/
RUN cp -r ../shuttle_PWA/dist/index.html ./public/

EXPOSE 3000

CMD ["forever", "start", "bin/www"]
