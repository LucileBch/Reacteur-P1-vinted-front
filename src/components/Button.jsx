// ---------- BUTTON Component ----------
// Style Imports
import "../styles/Button.css";

const Button = ({ text, onClick, disabled }) => {
  const buttonStyle =
    text === "S'inscrire" || text === "Se connecter"
      ? "button button--outlined"
      : text === "Se déconnecter"
      ? "button button--logout"
      : "button button--fill";
  const displayButton = disabled === true && "hidde--button";

  return (
    <button onClick={onClick} className={`${buttonStyle} ${displayButton}`}>
      {text}
    </button>
  );
};

// Export components
export default Button;
