// ---------- BUTTON Component ----------
const Button = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

// Export components
export default Button;
