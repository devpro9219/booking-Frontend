FROM node:6.10

RUN mkdir /src
WORKDIR /src
COPY . /src

RUN npm install --quiet
RUN npm install pm2 react-scripts -g --quiet

EXPOSE 9000
EXPOSE 3000

ADD docker/scripts/start.sh /start.sh
RUN chmod +x /start.sh
CMD bash /start.sh
