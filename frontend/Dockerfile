# frontend/Dockerfile
FROM node:20-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --output-path=./dist/out --base-href=/

# We can use a lightweight server like Nginx for production,
# but for simplicity, we'll use a simple http-server.
FROM node:20-alpine
WORKDIR /app
COPY --from=build /app/dist/out ./
RUN npm install -g http-server
# EXPOSE 4200
# CMD ["http-server", "-p", "4200", "./"]
# Expose Render’s dynamic port (not hardcoded)
EXPOSE 8080

# Use $PORT instead of 4200
CMD ["sh", "-c", "http-server ./dist/out -p $PORT"]