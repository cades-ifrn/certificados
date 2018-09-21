import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";

import Root from "./Root";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
