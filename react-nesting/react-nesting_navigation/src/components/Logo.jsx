import Image from "./Image";
import logo from "../assets/logo.jpg";


export default function Logo() {
    return (
         <a href="#">
          <Image className="round-image" src={logo} alt="logo" />
        </a>
        );
}