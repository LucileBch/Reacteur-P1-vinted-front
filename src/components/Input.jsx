// ---------- INPUT Component ----------
// Style Imports
import "../styles/Input.css";

const Input = ({ type, placeholder, name, state, setState }) => {
  // Handle changes on inputs
  const handleChange = (event) => {
    setState(event.target.value);
  };

  // Handle File
  const handleFile = (event) => {
    setState(event.target.files[0]);
  };

  // Class for CSS
  const searchField = name === "search" && "header__input--searchfield";
  const textInput =
    (name === "username" || name === "email" || name === "password") &&
    "form__input";

  return (
    <input
      id={name}
      className={`${searchField} ${textInput}`}
      value={type === "file" ? state.files : state}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={() => {
        type === "file" ? handleFile(event) : handleChange(event);
      }}
    />
  );
};

// Export component
export default Input;
