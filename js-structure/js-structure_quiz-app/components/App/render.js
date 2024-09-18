import App from "./App";

export default function render() {
    const root = document.querySelector("#root");
    root.append(App());
  }