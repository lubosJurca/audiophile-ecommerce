import { useReducer } from "react";

// CartContext
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
  numberOfCartItems: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // check if item is already in cart => return index
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    //if item is in cart =>  grab the item in cart
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      // add amount to cart item
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems =  [...state.items] ;
      // update existing item in cart
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // add item to cart
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR_ITEMS") {
    return defaultState;
  }

  if(action.type === "REMOVE_ITEM"){
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else  {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } 

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState);

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item: item });
  };

  const removeAllItemsFromCart = () => {
    dispatchCartAction({ type: "CLEAR_ITEMS" });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id: id})
  }

  const numberOfCartItems = cartState.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);


  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    numberOfCartItems: numberOfCartItems,
    addItem: addItemToCart,
    removeAllItems: removeAllItemsFromCart,
    removeItem: removeItemFromCart
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
