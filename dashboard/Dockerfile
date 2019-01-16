# Stage 1 - the build process
FROM node:lts-alpine AS build
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build

# Stage 2 - the production environment
FROM nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
