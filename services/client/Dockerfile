
FROM node:20.16.0

WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .
RUN npm ci

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]