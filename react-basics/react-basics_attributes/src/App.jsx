import "./App.css";

export default function App() {
  return <Article/>;
}

export function Article () {
  return <article className="article">
  <h2 className="article__title">Text of my Choice</h2>
  <label htmlFor="input__field">Some input</label>
  <input id="input__field"></input>
  <a className="article__link" href="https://en.wikipedia.org/wiki/React_(JavaScript_library)">Further reading</a>
</article>
}
