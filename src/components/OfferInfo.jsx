// ---------- OFFERINFO Component ----------
// Packages Imports
import { Link } from "react-router-dom";

// Components Imports
import Button from "./Button";

// Assets and Style Imports
import EmptyAvatar from "../assets/img/user-empty-avatar.svg";
import "../styles/OfferInfo.css";

const OfferInfo = ({
  infos,
  token,
  setVisible,
  setModalName,
  setFilterDisplay,
}) => {
  const handleLogin = () => {
    setVisible(true);
    setModalName("login");
    setFilterDisplay(false);
  };

  return (
    <aside>
      <div className="aside__details">
        <h2>{infos.product_price} €</h2>
        <ul>
          {infos.product_details.map((detail) => {
            return (
              <li className="aside__details--product" key={Object.keys(detail)}>
                <span>{Object.keys(detail)}</span>
                <span>{Object.values(detail)}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="aside__product">
        <h3>{infos.product_name}</h3>
        <p>{infos.product_description}</p>
      </div>
      <div>
        <div className="aside__owner">
          {infos.owner.account.avatar ? (
            <img
              className="aside__picture--avatar"
              src={infos.owner.account.avatar.secure_url}
              alt="avatar de l'utilisateur"
            />
          ) : (
            <img
              className="aside__picture--avatar"
              src={EmptyAvatar}
              alt="avatar de l'utilisateur"
              style={{ borderRadius: "100%", width: "50px" }}
            />
          )}
          <p>{infos.owner.account.username}</p>
        </div>

        {token ? (
          <Link
            to="/payment"
            state={{ title: infos.product_name, price: infos.product_price }}
          >
            <Button text="Acheter" />
          </Link>
        ) : (
          <Link
            to="/payment"
            state={{ title: infos.product_name, price: infos.product_price }}
          >
            <Button text="Acheter" onClick={handleLogin} />
          </Link>
        )}
      </div>
    </aside>
  );
};

// Export component
export default OfferInfo;
