import { createContext } from "react";

export const ProductContext = createContext({});

export const ProductProvider = () => {
  const value = {};
  return <ProductContext.Provider value={value}></ProductContext.Provider>;
};
