# Udagram Image Filtering Micro-Services

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos.

The project is split into three parts:
1. [The Simple Frontend] A basic Ionic client web application which consumes the RestAPI Backend. 
2. [The RestAPI User Backend] A Node-Express server which handles User Request and submits to the AWS postgresql DB.
3. [The RestAPI Feed Backend] A Node-Express server which handles Feed Request and upload images to the AWS S3 bucket. 

## Tasks
### Setup Node Environment
You'll need to create a new node server. Open a new terminal within the project directory and run:
1. Initialize a new project: `npm init`
2. Install express: `npm i express --save`
3. Install typescript dependencies: `npm i ts-node-dev tslint typescript  @types/bluebird @types/express @types/node --save-dev`
4. Look at the `package.json` file from the RestAPI repo and copy the `scripts` block into the auto-generated `package.json` in this project. This will allow you to use shorthand commands like `npm run dev`

### Setup Elastic BeanStalk cli
To install Elastic BeanStalk first you need to install python:
1. To install python for windows go to the website https://www.python.org/downloads/.
2. After python is installed. You can install Elastic BeanStalk by typing:
   `pip install awsebcli --upgrade --user`
3. Type `eb --version` to verify that elastic BeanStalk is installed.

### Deploying your system!
1. Follow the process  `eb init` a new application
2. `eb create` a new environment to deploy your image-filter service!
3. `eb deploy` to deploy the application.


