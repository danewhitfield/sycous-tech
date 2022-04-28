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
Which will install `Express`, `request`, `react-router-dom` and some other non-essential dependencies such as `nodemon`.

---

### Running The App
In the package.json file you will find a script setup for `server`, you can run this by using the command `npm run server`. This will setup the proxy required to get access to the API. Once that's ran we can use `npm start` to run the React app.

---

### Proxy
The proxy is set to run on `PORT:9000` assuming you have it available. If not you will need to change the PORT to one you do have free in `/db/index.js` on `line 26`.
