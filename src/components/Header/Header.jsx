// css
import "./Header.css";

// logo && images
import logo from "../../assets/logo.png";

// components
import Navbar from "../Navbar/Navbar";
// layout
import HeaderCartButton from "../../layouts/HeaderCartButton";
import HeaderMenuButton from "./HeaderMenuButton.jsx/HeaderMenuButton";



function Header(props) {
  return (
    <header>
      <HeaderMenuButton />
      <img src={logo} alt="Logo" />
      <Navbar />
      <HeaderCartButton onClick={props.onShowCart} />
    </header>
  );
}

export default Header;
