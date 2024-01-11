# frontend-basic-login

## Imagen de login básico

![login](documentation/login.png)

## Dockerfile

```Dockerfile
FROM nginx
COPY index.html /usr/share/nginx/html
COPY images /usr/share/nginx/html/images
```

```bash
docker build -t frontend-basic-login/nginx:0.0.4 .

docker run --name frontend-basic-login -d -p 8080:80 frontend-basic-login/nginx:0.0.4
```
