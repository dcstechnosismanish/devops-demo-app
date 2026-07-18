# Base Image
FROM node:22-alpine

# Working Directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install Dependencies
RUN npm ci

# Copy project files
COPY  . .

# Expose application port
EXPOSE 3000

# Start application
CMD ["npm", "start"]


