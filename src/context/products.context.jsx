import { createContext, useEffect, useState } from "react";
import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../utils/firebase.util";
import SHOP_DATA from "../shop-data";

export const ProductContext = createContext({
  categoriesMap: {},
});

export const ProductProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // Update new Shop data file and run this commented statements to update categories
  // useEffect(() => {
  //   addCollectionAndDocuments(SHOP_DATA, "categories");
  // }, []);

  useEffect(() => {
    const getMappedCategoriesAndDocuments = async () => {
      const mappedCategoriesAndDocuments = await getCategoriesAndDocuments();
      setCategoriesMap(mappedCategoriesAndDocuments);
    };
    getMappedCategoriesAndDocuments();
  }, []);

  const value = { categoriesMap };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
