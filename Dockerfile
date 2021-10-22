# FROM node:13.12.0-alpine
# WORKDIR /LASTREDUX
# ENV PATH /LASTREDUX/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@4.0.3 -g --silent
# COPY . ./
# CMD ["npm", "start"]

FROM node:16.9.1-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm","start"]

# 489e4c42e751