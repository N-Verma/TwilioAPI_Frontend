FROM node:14.15.1-alpine as build-step

# WORKDIR /usr/src/app
# COPY package*.json ./

# RUN npm install --silent
# COPY . .

# EXPOSE 3000
# CMD ["npm", "start"]

RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install --silent
COPY . /app
RUN npm run build
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html