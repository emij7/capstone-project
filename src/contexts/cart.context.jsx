import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartTotalQuantity: 0,
});

const addCartItem = (cartItems, product) => {
  const existingItem = cartItems.find((cartItem) => {
    return cartItem.id === product.id;
  });
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

  useEffect(() => {
    const newCartQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartTotalQuantity(newCartQuantity);
  }, [cartItems]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartTotalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
