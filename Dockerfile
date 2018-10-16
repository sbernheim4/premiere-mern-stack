FROM node:10.9.0
WORKDIR /usr/workdir

COPY ./entrypoint.sh /usr/entrypoint.sh

RUN npm install
RUN npm i -g concurrently
ENTRYPOINT ["/usr/entrypoint.sh"]
