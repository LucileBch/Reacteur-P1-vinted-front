// ---------- INPUT Component ----------
// Style Imports
import "../styles/Input.css";

const Input = ({ type, placeholder, name, state, setState }) => {
  // Handle change
  const handleChange = (event) => {
    setState(event.target.value);
  };

  const searchField =
    name === "search" ? "header__input--searchfield" : "random";

  return (
    <input
      className={searchField}
      value={state}
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={() => {
        handleChange(event);
      }}
    />
  );
};

// Export component
export default Input;
