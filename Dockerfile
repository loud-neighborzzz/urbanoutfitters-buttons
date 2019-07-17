FROM node 

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5152

CMD [ "npm", "start" ]