// router
import { Link } from "react-router-dom";

// Material UI
import { NavigateNext } from "@mui/icons-material";

// css
import "./NavItem.css";

function NavItem({ title, img, link }) {
  return (
    <div className="box">
      <img src={img} alt={title} />
      <div className="shadow-box">
        <h6>{title}</h6>
        <Link to={`/${link}`}>
          SHOP <NavigateNext className="navigate-next-icon" />{" "}
        </Link>
      </div>
    </div>
  );
}

export default NavItem;
