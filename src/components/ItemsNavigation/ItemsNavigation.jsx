// data
import ItemsNavigationData from "../../assets/data/ItemsNavigationData";

// components
import NavItem from "./NavItem";

import { Slide } from "react-awesome-reveal";

// css
import "./ItemsNavigation.css";

function ItemsNavigation() {
  return (
    <Slide triggerOnce direction="right" fraction={0.5}>
      <section className="items-navigation">
        {ItemsNavigationData.map((item) => {
          return <NavItem key={item.id} {...item}  />;
        })}
      </section>
    </Slide>
  );
}

export default ItemsNavigation;
