import Card from "./components/Card";
import "./App.css";

const fruits = [
  {
    id: 1,
    name: '🍌 Banana',
    color: 'yellow',
  },
  {
    id: 2,
    name: ' 🍓 Strawberry',
    color: 'red',
  },
  {
    id: 3,
    name: '🍏 Apple',
    color: 'green',
  },
  {
    id: 4,
    name: '🫐 Blueberry',
    color: 'blue',
  },
  {
    id: 5,
    name: '🍊 Orange',
    color: 'orange',
  }
];

export default function App() {
  return (
    <div className="app"> {
      fruits.map(fruit =>
      <Card key={fruit.id} name={fruit.name} color={fruit.color}/>
   )}
    </div>
  );
}
