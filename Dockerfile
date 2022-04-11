FROM public.ecr.aws/h4m7c9h3/baseimages:node-16.13.2-alpine
WORKDIR /app
ENV NODE_OPTIONS=--max-old-space-size=3072
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./
# COPY .env ./
RUN npm install 
COPY . ./
RUN npm run build
CMD npm run start:prod
