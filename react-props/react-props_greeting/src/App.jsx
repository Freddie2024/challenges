import "./App.css";

export default function App() {
  return <Greeting name="Gimena" isCoach={true}/>;
}

export function Greeting({name, isCoach}) {
  return (
    <div>
  {isCoach ? <p>Hello, Coach!</p> : <p>Hello, {name}!</p>}
  </div>
  );
}
