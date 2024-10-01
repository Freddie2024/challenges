import "./App.css";

export function Button({color, disabled, text}) {
  return (<button
    style={{height: "100px",
    backgroundColor: color,
    borderRadius: "50%"
  }}
  disabled={disabled}
  >
  {text}
  </button>
  );
}

export default function App() {
  return <Button color={"yellow"} disabled={false} text="Hello Sunshine"/>;
}
