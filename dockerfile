FROM node:18

RUN curl -o- -L https://yarnpkg.com/install.sh | bash -s -- --version 1.22.17 && \
    ln -s /root/.yarn/bin/yarn /usr/local/bin/yarn && \
    ln -s /root/.yarn/bin/yarnpkg /usr/local/bin/yarnpkg

RUN mkdir -p /home/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]


