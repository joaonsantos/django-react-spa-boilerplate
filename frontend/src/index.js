import React from "react";
import ReactDOM from 'react-dom';

import App from "./components/App";

const appRoot = document.getElementById('app');
appRoot ? ReactDOM.render( <App /> , appRoot): false;
