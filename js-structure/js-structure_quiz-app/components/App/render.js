import App from "./App.js";

export default function render() {
    const root = document.querySelector("#root");
    root.append(App());
  }