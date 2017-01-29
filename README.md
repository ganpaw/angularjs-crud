AngularJS - CRUD Static Web Application
==========

[Demo](https://ganpaw.github.io/angularjs-crud)

![Alt text](/images/crud.PNG?raw=true "CRUD Operation")


#### Steps:

**1- Install http-server

```
 npm install http-server -g
```

**2- Run http server

```
http-server .
```

**3- Open http://localhost:8080


#### Using Docker:
**1- Build docker image based on NGINX
```
docker build -t angular-crud:1.0 .
```
**2- Verify image
```
docker images
```
**3- Run docker container
```
docker run -d -p 8080:80 --name angular-crud-static-webapp angular-crud:1.0
```
**4- Verify site running
```
curl http://localhost:8080
```
