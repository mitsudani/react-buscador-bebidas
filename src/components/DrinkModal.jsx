import { Modal, Image } from "react-bootstrap";
import useDrink from "../hooks/useDrink";

const DrinkModal = () => {
  const { modal, handleModalClick } = useDrink();

  return (
    <Modal show={modal} onHide={handleModalClick}>
      <Modal.Body>Cuerpo del modal</Modal.Body>
    </Modal>
  );
};

export default DrinkModal;
