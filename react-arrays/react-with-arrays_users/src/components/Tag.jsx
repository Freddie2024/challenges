import "./Tag.css";

export default function Tag({ tag }) {
  return (
  <li className={tag === 'admin' ? "tag__highlight" : "tag"}>
    {tag}
  </li>
  );
}
