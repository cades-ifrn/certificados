import React from "react";
import ReactDOM from "react-dom";

import registerServiceWorker from "./registerServiceWorker";
import registerFonts from "./registerFonts";

import Root from "./Root";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<Root />, document.getElementById("root"));
registerFonts();
registerServiceWorker();
