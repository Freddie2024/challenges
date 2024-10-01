import "./App.css";

export function Button({color, disabled, text, onClick}) {

  return (<button
  style={{
  height: "100px",
  backgroundColor: color,
  borderRadius: "50%"
  }}
  disabled={disabled}
  onClick={onClick}
  >
  {text}
  </button>
  );
}

export default function App() {
  const handleClick = () => {
    console.log("You clicked me!");
  };
  return <Button 
  onClick={handleClick}
  color={"yellow"} 
  disabled={false} 
  text="Hello Sunshine"/>;
}
