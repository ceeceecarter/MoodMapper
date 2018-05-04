import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Landing from "../src/components/Pages/Landing";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Landing />, document.getElementById("root"));
registerServiceWorker();
