// ---------- FORM Component ----------
// Import packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// Import components
import Input from "./Input";

// Styles Imports
import "../styles/Form.css";

const Form = ({ modalName, setModalName, setToken, visible, setVisible }) => {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [avatar, setAvatar] = useState("");

  const navigate = useNavigate();

  // Handle changes on input checkbox
  const handleNewsletter = () => {
    setNewsletter(!newsletter);
  };

  // Handle switch between Signup/Login modal
  const handleSwitch = (modalName) => {
    if (modalName === "signUp") {
      setModalName("login");
    } else if (modalName === "login") {
      setModalName("signUp");
    }
  };

  // if Modal = signUp => display signUp Modal
  // if Modal = login => display login Modal
  if (modalName === "signUp") {
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        setErrorMessage("");

        const formData = new FormData();
        formData.append("email", email);
        formData.append("username", name);
        formData.append("password", password);
        formData.append("newsletter", newsletter);
        formData.append("avatar", avatar);

        const { data } = await axios.post(
          `https://lereacteur-vinted-api.herokuapp.com/user/signup`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        Cookies.set("userToken", data.token, { expires: 7 });
        setToken(data.token);
        setVisible(!visible);
        navigate("/");
      } catch (error) {
        if (error.response.status === 409) {
          setErrorMessage(
            "Cet email existe déjà, merci de choisir une autre adresse."
          );
        } else if (error.response.data.message === "Missing parameters") {
          setErrorMessage("Merci de remplir tous les champs.");
        }
      }
    };

    return (
      <>
        <h2 className="form__title">S'inscrire</h2>
        <form onSubmit={handleSubmit} className="form__container">
          {/* <div className="upload__avatar"> */}
          {avatar && (
            <img
              className="upload__avatar--display"
              src={URL.createObjectURL(avatar)}
              alt="avatar"
            />
          )}
          <label htmlFor="avatar" className="upload__avatar">
            Ajouter un avatar
          </label>
          <Input id="avatar" type="file" state={avatar} setState={setAvatar} />
          {/* </div> */}

          <Input
            type="text"
            placeholder="Nom d'utilisateur"
            name="username"
            setState={setName}
            state={name}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            setState={setEmail}
            state={email}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            name="password"
            setState={setPassword}
            state={password}
          />
          <div className="form__checkbox">
            <input
              type="checkbox"
              name="newsletter"
              onChange={handleNewsletter}
            />
            <p>S'inscrire à notre newsletter</p>
          </div>
          <p className="form__terms">
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input className="form__submit" type="submit" value="S'inscrire" />
          {errorMessage && <p className="form__error">{errorMessage}</p>}
        </form>

        <button
          className="form__link"
          onClick={() => {
            handleSwitch(modalName);
          }}
        >
          Tu as déjà un compte ? Connecte-toi !
        </button>
      </>
    );
  } else if (modalName === "login") {
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        setErrorMessage("");
        const { data } = await axios.post(
          `https://lereacteur-vinted-api.herokuapp.com/user/login`,
          {
            email: email,
            password: password,
          }
        );
        Cookies.set("userToken", data.token, { expires: 7 });
        setToken(data.token);
        setVisible(!visible);
      } catch (error) {
        if (error.response.status === 400 || error.response.status === 401) {
          setErrorMessage("Email ou mot de passe incorrect ou inexistant.");
        }
      }
    };
    return (
      <div className="modal__container">
        <h2 className="form__title">Se connecter</h2>
        <form onSubmit={handleSubmit} className="form__container">
          <Input
            type="email"
            placeholder="Email"
            name="email"
            setState={setEmail}
            state={email}
          />
          <Input
            type="password"
            placeholder="Mot de passe"
            name="password"
            setState={setPassword}
            state={password}
          />

          <input className="form__submit" type="submit" value="Se connecter" />
          {errorMessage && <p className="form__error">{errorMessage}</p>}
        </form>

        <button
          className="form__link"
          onClick={() => {
            handleSwitch(modalName);
          }}
        >
          Pas encore de compte ? Inscris-toi !
        </button>
      </div>
    );
  }
};

// Export component
export default Form;
