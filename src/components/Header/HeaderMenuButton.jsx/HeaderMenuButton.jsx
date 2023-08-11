import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";

// css
import "./HeaderMenuButton.css";

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu-icon">
      <Button id="basic-button" onClick={handleClick}>
        <MenuIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem id="link" onClick={handleClose}><Link to="/">Home</Link></MenuItem>
        <MenuItem id="link" onClick={handleClose}><Link to="headphones">Headphones</Link></MenuItem>
        <MenuItem id="link" onClick={handleClose}><Link to="speakers">Speakers</Link></MenuItem>
        <MenuItem id="link" onClick={handleClose}><Link to="earphones">Earphones</Link></MenuItem>
      </Menu>
    </div>
  );
}
