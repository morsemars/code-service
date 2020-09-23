# Code Microservice

## Getting Started

### Key Dependencies
1. [NodeJS v12.18.1](https://nodejs.org/en/)
2. [Express](http://expressjs.com/) -  web framework for NodeJS
3. [VM2](https://github.com/patriksimek/vm2) -  sandbox for running untrusted JS code.

#### Installing Dependencies 

`npm install`

#### Running Server locally

`npm start` or `node server.js`

The server will run port 3000

#### Using Docker

1. Build Container
`npm run docker-build`
or
`docker build --tag [name of service] .`

2. Run
`npm run docker-run`
or
`docker run -d -p [local port]:[exposed port on docker] code-service`

## API Endpoint

### code

| API Endpoint | URL Parameters | Data Parameters | Description | Returns |
| --- | --- | --- | --- | --- |
| POST /code/execute | | code: A string of code | Executes the string of code | JSON { <br/> **logs**: array containing messages in console.log, <br/> **returnValue**: "contains the result of executing the code", <br/> **success**: indicates if the code executed without error <br/>} |