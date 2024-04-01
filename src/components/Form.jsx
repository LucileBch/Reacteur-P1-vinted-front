// ---------- FORM Component ----------
// Import packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

// Import components
import Input from "./Input";

const Form = ({ modalName, setModalName, setToken, visible, setVisible }) => {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
        const { data } = await axios.post(
          `https://lereacteur-vinted-api.herokuapp.com/user/signup`,
          {
            email: email,
            username: name,
            password: password,
            newsletter: newsletter,
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
      <div>
        <h2>S'incrire</h2>
        <form onSubmit={handleSubmit}>
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
          <div>
            <input
              type="checkbox"
              name="newsletter"
              onChange={handleNewsletter}
            />
            <p>S'inscrire à notre newsletter</p>
          </div>
          <p>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </p>
          <input type="submit" value="S'inscrire" />
          {errorMessage && <p>{errorMessage}</p>}
        </form>

        <button
          onClick={() => {
            handleSwitch(modalName);
          }}
        >
          Tu as déjà un compte ? Connecte-toi!
        </button>
      </div>
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
      <div>
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
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

          <input type="submit" value="Se connecter" />
          {errorMessage && <p>{errorMessage}</p>}
        </form>

        <button
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
