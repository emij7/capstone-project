import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

//user starting value
export const ProductContext = createContext({
  products: [],
});

//provider, to pass the values to all the components
//value is the value that we want to pass to the components
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products, setProducts };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
