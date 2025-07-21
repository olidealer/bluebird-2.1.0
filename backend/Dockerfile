FROM node:18-alpine
WORKDIR /app
COPY package.json package-lock.json tsconfig.json ./
RUN npm ci && npm cache clean --force
COPY prisma prisma
RUN npx prisma generate
COPY src src
RUN npm run build
CMD ["node", "dist/index.js"]
