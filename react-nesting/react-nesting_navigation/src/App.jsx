import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import "./App.css";

import avatar from "./assets/avatar.jpg";
import logo from "./assets/logo.jpg";

export default function App() {
  return (
    <>
      <Header>
        <Link href="#">
          <img className="round-image" src={logo} alt="logo" />
        </Link>
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
      </Header>
      <main>content goes here…</main>
    </>
  );
}
