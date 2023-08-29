# FROM node:18

# WORKDIR /app

# COPY package*.json ./app

# RUN npm i

# COPY . .

# EXPOSE 5000

# CMD ["npm", "start"]

# FROM node:18

# ENV DB_KEY=mongodb://castelldb:castelldb@ac-iqpqyh6-shard-00-00.xotwoj4.mongodb.net:27017,ac-iqpqyh6-shard-00-01.xotwoj4.mongodb.net:27017,ac-iqpqyh6-shard-00-02.xotwoj4.mongodb.net:27017/?ssl=true&replicaSet=atlas-wbkmzb-shard-0&authSource=admin&retryWrites=true&w=majority
# ENV TOKEN_SECRET=a552ce99c57814ee68d257dfebb68bf5acf459317fd147b1c5dd4daac92b317def26a6360f574891add94c042e75c59bd483687db0a749fafc906a3dd284c0ed

# WORKDIR /usr/src/app

# COPY package*.json ./


# RUN npm install

# COPY . .

# EXPOSE 8080

# CMD ["npm", "start"]


FROM node:18

ENV DB_KEY=mongodb://castelldb:castelldb@ac-iqpqyh6-shard-00-00.xotwoj4.mongodb.net:27017,ac-iqpqyh6-shard-00-01.xotwoj4.mongodb.net:27017,ac-iqpqyh6-shard-00-02.xotwoj4.mongodb.net:27017/?ssl=true&replicaSet=atlas-wbkmzb-shard-0&authSource=admin&retryWrites=true&w=majority
ENV TOKEN_SECRET=a552ce99c57814ee68d257dfebb68bf5acf459317fd147b1c5dd4daac92b317def26a6360f574891add94c042e75c59bd483687db0a749fafc906a3dd284c0ed

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]