// ---------- LOGIN Component ----------
// Import packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const ModalLogin = ({
  visible,
  setVisible,
  visibleLogin,
  setVisibleLogin,
  isConnected,
  setIsConnected,
  token,
  setToken,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const { data } = await axios.post(
        `https://lereacteur-vinted-api.herokuapp.com/user/login`,
        {
          email: email,
          password: password,
        }
      );
      Cookies.set("userToken", data.token, { expires: 7 });
      setToken(data.token);
      setVisibleLogin(!visibleLogin);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
        <h2>Se connecter</h2>

        <form onSubmit={handleSubmit}>
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

          <input type="submit" value="Se connecter" />
        </form>

        <button onClick={handleSwitchModal}>
          Pas encore de compte ? Inscris-toi !
        </button>
      </div>
    </div>
  );
};

export default ModalLogin;
