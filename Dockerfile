FROM napear/node

WORKDIR /home/dev/code
RUN npm install -g @angular/cli @angular/localize

CMD ["start"]

ENTRYPOINT [ "npm" ]
