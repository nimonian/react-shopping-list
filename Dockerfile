# start with node v16 on linux
FROM node:16

# create and move to /app directory
WORKDIR /app

# copy package.json into the app directory
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# 1. INSTALL A STATIC SERVER
# npm i serve
# now add "serve": "react-scripts build && serve build -l 3000" to scripts in package.json

# 2.IMAGE
# Build an image from your Dockerfile:
# docker build -t give-it-a-tag:v1 .

# 3. CONTAINER
# Run our image in a new container:
# docker run -p 4000:3000 give-it-a-tag:v1

# Now visit localhost:4000 in your browser!