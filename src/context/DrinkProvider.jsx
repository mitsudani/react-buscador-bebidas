import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinkContext = createContext();

const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);

  const searchDrink = async (search) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DrinkContext.Provider value={{ searchDrink, drinks }}>
      {children}
    </DrinkContext.Provider>
  );
};

export { DrinkProvider };

export default DrinkContext;
