# Eagle Console: a self-service portal for Tranquility Base.

Hi, and welcome to EagleConsole  - It is a Front-end self-service portal for Tranquility Base - the open source multi-cloud infrastructure-as-code Landing Zone. Eagle console is for automating the provisioning of a set of DevOps-ready reference architectures. For further description of Tranquility Base, please head over to tranquilitybase.io.


To run Eagle console locally

1. Download the eagle-console code base
2. Install dependencies by running  `npm install`
3. Install docker and run the docker daemon
4. Run the tb-houston-service stack using command `docker-compose -f docker-compose.experimental.yml up`
5. In a new Terminal run the EagleConsole using command `npm start`

# Using development prebuild docker images

## Run the stack as containers

### Start the stack detached mode
*  `docker-compose up -d`

### Stopping the stack 
*  `docker-compose stop`

### Removing the stack leftover from memory
*  `docker-compose down`

### Removing the stack leftover from memory and disk
*  `docker-compose down --rmi all`

### Get latest the stack update
*  `docker-compose pull`

### Recreate the stack (with initial DataBase setup)
*  `docker-compose kill`
*  `docker-compose down --rmi all`
*  `docker-compose pull`
*  `docker-compose up -d`

### Remove all docker images (Save disk space when not running)
*  `docker rmi -f $(docker images -a -q)`

## Run the server as containers

### Start tb-houston-service and tb-gcp-dac (mock) detached mode
*  `docker-compose -f docker-compose.experimental.yml up -d`

### Stopping tb-houston-service and tb-gcp-dac (mock)
*  `docker-compose -f docker-compose.experimental.yml stop`

### Removing tb-houston-service and tb-gcp-dac (mock) leftover from memory
*  `docker-compose -f docker-compose.experimental.yml down`

### Removing tb-houston-service and tb-gcp-dac (mock) leftover from memory and disk
*  `docker-compose -f docker-compose.experimental.yml down --rmi all`

### Get latest tb-houston-service and tb-gcp-dac (mock) update
*  `docker-compose -f docker-compose.experimental.yml pull`

### Recreate tb-houston-service and tb-gcp-dac (mock) (with initial DataBase setup)
*  `docker-compose -f docker-compose.experimental.yml kill`
*  `docker-compose -f docker-compose.experimental.yml down --rmi all`
*  `docker-compose -f docker-compose.experimental.yml pull`
*  `docker-compose -f docker-compose.experimental.yml up -d`

### Remove all docker images (Save disk space when not running)
*  `docker rmi -f $(docker images -a -q)`

# GCP Build commands

```sh
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
git clone https://github.com/tranquilitybase-io/tb-eagle-console.git
cd tb-eagle-console
npm install --production
npm run build
gcloud config set project tranquility-base-images
docker build -t gcr.io/tranquility-base-images/tb-eagle-console:alpha .
docker push gcr.io/tranquility-base-images/tb-eagle-console:alpha
docker build -f Dockerfile.experimental -t gcr.io/tranquility-base-images/tb-eagle-console:experimental .
docker push gcr.io/tranquility-base-images/tb-eagle-console:experimental
```

# TbEagleConsoleUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
