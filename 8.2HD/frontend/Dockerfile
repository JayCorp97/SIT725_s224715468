# Use Nginx as a base image
FROM nginx:alpine

# Copy all frontend files (including login.html) into Nginx's default HTML directory
COPY frontend/ /usr/share/nginx/html/

# Copy the custom nginx.conf file into Nginx's configuration directory
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to serve the app
EXPOSE 80
