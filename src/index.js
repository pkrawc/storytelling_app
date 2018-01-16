import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { injectGlobal } from "styled-components"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"

injectGlobal`
@import url("https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css");
@import url('https://fonts.googleapis.com/css?family=Lato:300,400,900');
*,*:before,*:after {
  box-sizing: border-box;
}
:root {
  font-size: 18px;
}
html, body {
  width: 100%;
  height: 100%;
}
body {
  position: relative;
  margin: 0;
  padding: 1em 0 0;
  background-color: #8ed8fc;
  background-image: linear-gradient(62deg, #8ed8fc 0%, #d3a7ff 100%);
  
  font-family: "SF Pro Text", sans-serif;
}
::-webkit-scrollbar { 
  display: none; 
}
`

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
)
registerServiceWorker()
