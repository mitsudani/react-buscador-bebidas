import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import { useState } from "react";
import useCategory from "../hooks/useCategory";
import useDrink from "../hooks/useDrink";

const DrinksForm = () => {
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  const [alert, setAlert] = useState("");

  const { categories } = useCategory();

  const { searchDrink } = useDrink();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(search).includes("")) {
      setAlert("Todos los campos son obligatorios.");
      return;
    }
    setAlert("");
    searchDrink(search);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {alert && (
        <Alert variant="danger" className="text-center">
          {alert}
        </Alert>
      )}
      <Row>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            {/* Control es un input */}
            <Form.Control
              id="name"
              type="text"
              placeholder="Ej: Tequila, Vodka, etc"
              name="name"
              value={search.name}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="categoria">Categoría Bebida</Form.Label>
            <Form.Select
              id="category"
              name="category"
              value={search.category}
              onChange={(e) =>
                setSearch({
                  ...search,
                  [e.target.name]: e.target.value,
                })
              }
            >
              <option>- Seleccione categoría -</option>
              {categories.map((category) => (
                <option key={category.strCategory} value={category.strCategory}>
                  {category.strCategory}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={3}>
          <Button
            variant="danger"
            className="text-uppercase w-100"
            type="submit"
          >
            Buscar Bebidas
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default DrinksForm;
