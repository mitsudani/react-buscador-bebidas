import { Modal, Image } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

const DrinkModal = () => {
  const { modal, handleModalClick, recipe } = useDrink();

  console.log(recipe);

  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Image src={recipe.strDrinkThumb} alt={`${recipe.strDrink}`} />
      <Modal.Header>
        <Modal.Title>{recipe.strDrink}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="p-3">
          <h2>Instrucciones</h2>
          {recipe.strInstructions}
          <h2>Ingredientes y Cantidades</h2>
          {showIngredients()}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DrinkModal;
