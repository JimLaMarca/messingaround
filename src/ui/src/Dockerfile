FROM node:18-alpine as base
WORKDIR ./ui/
COPY package*.json ./
EXPOSE 3000
FROM base as production
ENV NODE_ENV=production
RUN npm ci
COPY --chown=node:node ../../.. ./
USER node
CMD ["npm", "run", "start"]