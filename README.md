# Eagle Console: a self-service portal for Tranquility Base.

Hi, and welcome to EagleConsole  - It is a Front-end self-service portal for Tranquility Base - the open source multi-cloud infrastructure-as-code Landing Zone. Eagle console is for automating the provisioning of a set of DevOps-ready reference architectures. For further description of Tranquility Base, please head over to tranquilitybase.io.


To run Eagle console locally

1. Download the eagle-console code base
2. Install dependencies by running  'npm install'
3. Run Angular web server using command 'npm start' ( or ng serve -- --proxy-config ./proxy.conf.json)
4. Run JSON mock server using command 'npm run mock-server' .


# GCP Build commands

```sh
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
git clone https://github.com/tranquilitybase-io/tb-eagle-console.git
cd tb-eagle-console/tb-eagle-console-ui
npm install --production
export API_URL="http://api.url.address:example"
sed 's+API_URL+$API_URL+g' src/environments/environment.dev.ts > src/environments/environment.prod.ts
npm run build
export PROJ_NAME="tb-eagle-console-example"
gcloud config set project $PROJ_NAME
docker build -t gcr.io/$PROJ_NAME/tb-eagle-console-ui:alpha .
docker push gcr.io/$PROJ_NAME/tb-eagle-console-ui:alpha
```