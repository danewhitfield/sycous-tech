# Sycous Tech Test | Dane Whitfield

### Installation instructions

Please either clone this repo `https://github.com/danewhitfield/sycous-tech.git`, or fork it and then clone.

---

### Install Dependencies

To install all of the dependencies for this app please use:

```
npm i
```

_Hint: make sure you are in the root directory of the project_
<br>
Which will install `Express`, `request`, `react-router-dom`, `styled-components`, `dotenv` and some other non-essential dependencies such as `nodemon`.

---

### Running The App

In the package.json file you will find a script setup for `server`, you can run this by using the command `npm run server` or alternatively just run `node ./db/index.js`. This will setup the proxy required to get access to the API. Once that's ran we can use `npm start` to run the React app.
<br>
<br>
_I would advise to have a split terminal to run both commands as you will need both running together._

---

### Proxy

The proxy is set to run on `PORT:9000` assuming you have it available. If not you will need to change the PORT to one you do have free in `/db/index.js` on `line 26`.

---

### Deployment

Just for fun I deployed with Netlify but unfortunately it will only run if the server is currently running:
[Click here to see the app not work](https://sycous-x-dane.netlify.app/)

---

### .env

Just to throw it into the mix for best practises I added dotenv for the proxy URL.
<br>
Feel free to just uncomment the actual URL - but in case you want to test it, create a .env file with the following key/value:
```
URL=https://green-meadow-0b6c10003.azurestaticapps.net/building-location.json
```
