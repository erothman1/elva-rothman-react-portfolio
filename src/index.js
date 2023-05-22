//import React, JS library to build user interfaces
import React from "react"
//import ReactDOM to provide access to DOM-specific methods 
import ReactDOM from "react-dom"

import App from "./App"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"

//renders App component to the DOM on the #root target element 
ReactDOM.render(<App />, document.getElementById("root"))