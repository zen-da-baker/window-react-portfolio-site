FROM node:alpine
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN npm i
RUN npm i -g serve
RUN npm run build
CMD ["serve", "-s", "build", "-l", "3000"]