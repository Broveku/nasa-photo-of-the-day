import { ThemeProvider } from 'styled-components'
import React from "react";
import themeObj from './theme'


import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
export const BASE_URL = 'https://api.nasa.gov'
export const API_KEY = 'K7V1z6TpBgTMcJh8ezoGfFuFhVtxUT3zxCAeMAqz'


ReactDOM.render(
<ThemeProvider theme= {themeObj}> 
<App /> 
</ThemeProvider>, document.getElementById("root"));

