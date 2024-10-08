import "./Card.css";

export default function Card({ name, color }) {
  const colorClass = color ? `card--${color}` : '';
  return (
  <p className={`card ${colorClass}`}>
  {name}
  </p>
  );
}
