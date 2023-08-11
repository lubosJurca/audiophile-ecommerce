import { Outlet } from "react-router-dom";
import { useState } from "react";

// components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cart from "../components/Cart/Cart";
import CartProvider from "../store/CartProvider";
import ScrollToTop from "../components/ScrollToTop";

function Root() {
  const [cartIsShown, setCarIsShown] = useState(false);

  const toggleShowCartHandler = () => {
    setCarIsShown((prevState) => !prevState);
  };

  const hideCartHandler = () => {
    setCarIsShown(false);
  };

  return (
    <CartProvider>
      <div className="app">
        <ScrollToTop />
        {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        <Header onShowCart={toggleShowCartHandler} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default Root;
