FROM node:16-alpine

EXPOSE 8080
ENV APP=/usr/src/app
WORKDIR $APP

# copying package.json before copying code beause we rarely gonna change this and when we change actual code, this step along with npm install wont be running again because of cache
COPY package.json package.json

RUN npm install

COPY . .

CMD [ "npm", "run", "app" ]