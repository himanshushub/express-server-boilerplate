FROM node:16-alpine

EXPOSE 5000

ENV APP=/usr/src/app

WORKDIR ${APP}

RUN mkdir -p ${APP}/node_modules && chown -R node:node ${APP} 

# copying package.json before copying code beause we rarely gonna change this, and when we change the actual code, this step along with npm install wont be running again because of cache thus saving some time
COPY package*.json ${APP}/

USER node

RUN npm install

COPY --chown=node:node . ${APP}

CMD [ "npm", "run", "start" ]