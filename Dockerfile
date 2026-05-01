FROM node:20-alpine
WORKDIR /app

# Enable Corepack for npm build version consistency 
RUN corepack enable && corepack prepare npm@11.11.0 --activate

# Build argument from docker-compose
ARG VITE_API_BASE_URL

# Persist the API URL as a container environment variable
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY package*.json ./
RUN npm ci
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]