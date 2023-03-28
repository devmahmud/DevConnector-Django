# base image
FROM node:14

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the application code
COPY . .

EXPOSE 3000

# build the application
#RUN npm run build

# start the application
CMD ["npm", "start"]