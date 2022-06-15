import { Container } from "react-bootstrap";
import DrinksForm from "./components/DrinksForm";
import { CategoryProvider } from "./context/CategoryProvider";

function App() {
  return (
    <CategoryProvider>
      <header className="py-5">
        <h1>Buscador de Bebidas</h1>
      </header>

      <Container className="mt-5">
        <DrinksForm></DrinksForm>
      </Container>
    </CategoryProvider>
  );
}

export default App;
