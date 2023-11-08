FROM node:18

RUN mkdir -p /home/app

COPY .ANDRES-FELIPE-SIVA/DOCKER /home/app

EXPOSE 3000

CMD ["node", "/home/app/index.js"]


