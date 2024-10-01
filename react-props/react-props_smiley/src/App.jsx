import "./App.css";

export function Smiley({isHappy}) {
  return <p>:-)</p>
}

export default function App() {
  return <Smiley isHappy={true}/>;
}
