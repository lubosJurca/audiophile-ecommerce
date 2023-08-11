// components
import Zx9Speaker from "./Zx9Speaker";
import Zx7Speaker from "./Zx7Speaker";
import EmptyEarphones from "./EmptyEarphones";
import Yx1Earphones from "./Yx1Earphones";

// css
import "./MainGridSection.css";

import { Slide } from "react-awesome-reveal";

function MainGridSection() {
  return (
    <Slide triggerOnce fraction={0.2}>
      <section className="grid">
        <Zx9Speaker />
        <Zx7Speaker />
        <EmptyEarphones />
        <Yx1Earphones />
      </section>
    </Slide>
  );
}

export default MainGridSection;
