AngularJS - CRUD Static Web Application
==========

![Alt text](/images/crud.PNG?raw=true "CRUD Operation")


#### Steps:

Install http-server

```
 npm install http-server -g
```

Run http server

```
http-server .
```

Open http://localhost:8080


#### Using Docker:
Build docker image based on NGINX
```
docker build -t angular-crud:1.0 .
```
Verify image
```
docker images
```
Run docker container
```
docker run -d -p 8080:80 --name angular-crud-static-webapp angular-crud:1.0
```
Verify site running
```
curl http://localhost:8080
```
