import ReactDOM from "react-dom";
import App from "./App";

const Content = <App />
const Local = document.querySelector(".root");
ReactDOM.render(Content, Local);