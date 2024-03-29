// ---------- MODAL Component ----------
// Import component
import Form from "./Form";

const Modal = ({
  modalName,
  setModalName,
  visible,
  setVisible,
  token,
  setToken,
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "100px",
        left: "0",
        backgroundColor: "#D3D3D3",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <Form
          modalName={modalName}
          setModalName={setModalName}
          token={token}
          setToken={setToken}
          visible={visible}
          setVisible={setVisible}
        />
      </div>
    </div>
  );
};

export default Modal;
