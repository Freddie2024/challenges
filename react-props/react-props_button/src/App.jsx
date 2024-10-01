import "./App.css";

export function Button({color, disabled, text, onClick}) {
  return (<button
    style={{height: "100px",
    backgroundColor: color,
    borderRadius: "50%"
  }}
  disabled={disabled}
  onClick={() => alert("You touched me!")}
  
  >
  {text}
  </button>
  );
}

export default function App() {
  return <Button color={"yellow"} disabled={false} text="Hello Sunshine"/>;
}
