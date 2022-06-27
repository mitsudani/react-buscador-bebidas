import { useState, useEffect, createContext } from "react";
import axios from "axios";

const DrinkContext = createContext();

const DrinkProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState(null);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!drinkId) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
        const { data } = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, [drinkId]);

  const searchDrink = async (search) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`;
      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const handleModalClick = () => {
    setModal(!modal);
  };

  const handleDrinkId = (id) => {
    setDrinkId(id);
  };

  return (
    <DrinkContext.Provider
      value={{
        searchDrink,
        drinks,
        handleModalClick,
        modal,
        handleDrinkId,
        recipe,
      }}
    >
      {children}
    </DrinkContext.Provider>
  );
};

export { DrinkProvider };

export default DrinkContext;
