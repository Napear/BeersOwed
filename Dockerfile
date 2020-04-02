FROM napear/node

RUN npm install -g @angular/cli @angular/localize

CMD ["start"]

ENTRYPOINT [ "npm" ]
