# frontEnd React installation 
### 29. - 31
```
npm i axios react-router-dom redux react-redux redux-thunk redux-devtools-extension moment react-moment
We need to add proxy for axious
import React, { Fragment } from "react";
App.js file -> in Const App and use <Fragment>
```
### .31 React and cunccurent setup
```
npx create-react-app client
npm i concurrent
```

### 32. Clean up & Initial Components
```
import React, { Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import "./App.css";

const App = () => (
  <Fragment>
    <Navbar />
    <Landing />
  </Fragment>
);

export default App;
```
