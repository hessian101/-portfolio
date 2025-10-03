# Build stage
FROM node:20-alpine as builder

# Set working directory
WORKDIR /app

# Install build dependencies
RUN apk add --no-cache git python3 make g++

# Copy package files
COPY package*.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci --only=production=false

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Create non-root user for security
RUN addgroup -g 101 -S nginx_group
RUN adduser -S nginx_user -u 101 -G nginx_group

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Set proper permissions
RUN chown -R nginx_user:nginx_group /usr/share/nginx/html
RUN chown -R nginx_user:nginx_group /var/cache/nginx
RUN chown -R nginx_user:nginx_group /var/log/nginx
RUN chown -R nginx_user:nginx_group /etc/nginx/conf.d
RUN touch /var/run/nginx.pid
RUN chown -R nginx_user:nginx_group /var/run/nginx.pid

# Switch to non-root user
USER nginx_user

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

# Add labels for better maintainability
LABEL maintainer="portfolio-website"
LABEL version="1.0"
LABEL description="Production-ready portfolio website with React, TypeScript, and Three.js"

# Start nginx
CMD ["nginx", "-g", "daemon off;"]