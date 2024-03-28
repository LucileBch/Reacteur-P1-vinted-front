// ---------- MODALSIGNUP Component ----------
// Import packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const ModalSignUp = ({
  visible,
  setVisible,
  visibleLogin,
  setVisibleLogin,
  isConnected,
  setIsConnected,
  token,
  setToken,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
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
      setIsConnected(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // Handle changes on inputs
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleNewsletter = () => {
    setNewsletter(!newsletter);
  };

  const handleSwitchModal = () => {
    setVisible(!visible);
    setVisibleLogin(!visibleLogin);
  };

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
        <h2>S'incrire</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={name}
            type="text"
            placeholder="Nom d'utilisateur"
            name="username"
            onChange={() => {
              handleNameChange(event);
            }}
          />
          <input
            value={email}
            type="email"
            placeholder="Email"
            name="email"
            onChange={() => {
              handleEmailChange(event);
            }}
          />
          <input
            value={password}
            type="password"
            placeholder="Mot de passe"
            name="password"
            onChange={() => {
              handlePasswordChange(event);
            }}
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
        </form>

        <button onClick={handleSwitchModal}>
          Tu as déjà un compte ? Connecte-toi!
        </button>
      </div>
    </div>
  );
};

export default ModalSignUp;
