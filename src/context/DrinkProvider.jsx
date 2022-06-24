import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinkContext = createContext();

const DrinkProvider = ({ children }) => {
  return <DrinkContext.Provider value={{}}>{children}</DrinkContext.Provider>;
};

export { DrinkProvider };

export default DrinkContext;
