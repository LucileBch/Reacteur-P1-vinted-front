// ---------- MODAL Component ----------
// Component Imports
import Form from "./Form";

// Styles Imports
import "../styles/Modal.css";

const Modal = ({ modalName, setModalName, visible, setVisible, setToken }) => {
  return (
    <div className="modal__container">
      <Form
        modalName={modalName}
        setModalName={setModalName}
        setToken={setToken}
        visible={visible}
        setVisible={setVisible}
      />
    </div>
  );
};

// Export component
export default Modal;
