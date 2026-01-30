FROM node:18

WORKDIR /app

# Copy package.json and package-lock.json for caching
COPY package*.json ./
RUN npm install

# Copy the entire application code
COPY . .

# Expose port 5000 for backend
EXPOSE 5000

# Run server.js with node or use npm start if defined in package.json
CMD ["node", "server.js"]
