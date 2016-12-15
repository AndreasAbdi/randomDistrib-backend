from node:alpine

ADD . /app
WORKDIR /app

RUN npm install
RUN npm run build

EXPOSE 5000
CMD ["npm", "start"]
