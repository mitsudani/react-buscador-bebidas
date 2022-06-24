import { Container } from "react-bootstrap";
import DrinksForm from "./components/DrinksForm";
import { CategoryProvider } from "./context/CategoryProvider";
import { DrinkProvider } from "./context/DrinkProvider";

function App() {
  return (
    <CategoryProvider>
      <DrinkProvider>
        <header className="py-5">
          <h1>Buscador de Bebidas</h1>
        </header>

        <Container className="mt-5">
          <DrinksForm></DrinksForm>
        </Container>
      </DrinkProvider>
    </CategoryProvider>
  );
}

export default App;
