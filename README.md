
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run json-server`

Runs a fake REST API on port 5000.
Note that the default port json-server uses is 3000, but since this clashes with that of create-react-app, we use port 5000 instead. This is set in **package.json** file `json-server --watch db.json --port 5000`