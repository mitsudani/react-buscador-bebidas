import { Col, Card, Button } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

const Drink = ({ drink }) => {
  const { handleModalClick, handleDrinkId } = useDrink();

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img
          variant="top"
          src={drink.strDrinkThumb}
          alt={`Imagen de ${drink.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{drink.strDrink}</Card.Title>
        </Card.Body>
        <Button
          variant={"warning"}
          className="w-100 text-uppercase mt-2"
          onClick={() => {
            handleModalClick();
            handleDrinkId(drink.idDrink);
          }}
        >
          Ver receta
        </Button>
      </Card>
    </Col>
  );
};

export default Drink;
