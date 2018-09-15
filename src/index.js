import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Font } from "@react-pdf/renderer";

Font.register(
  "https://cdn.rawgit.com/google/fonts/c9d3903b/ofl/lato/Lato-Regular.ttf",
  {
    family: "Lato",
    weight: 400
  }
);

Font.register(
  "https://cdn.rawgit.com/google/fonts/c9d3903b/ofl/lato/Lato-Bold.ttf",
  {
    family: "Lato-Bold",
    weight: 700
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
