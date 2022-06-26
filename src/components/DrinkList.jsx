import useDrink from "../hooks/useDrink";
import { Row } from "react-bootstrap";
import Drink from "./Drink";

const DrinkList = () => {
  const { drinks } = useDrink();
  return (
    <Row className="mt-5">
      {drinks.map((drink) => (
        <Drink key={drink.idDrink} drink={drink} />
      ))}
    </Row>
  );
};

export default DrinkList;
