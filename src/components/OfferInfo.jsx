// ---------- OFFERINFO Component ----------
// Import components
import Button from "./Button";

// Import assets
import EmptyAvatar from "../assets/img/user-empty-avatar.svg";

const OfferInfo = ({ infos }) => {
  return (
    <aside>
      <p>{infos.product_price} €</p>

      {infos.product_details.map((detail) => {
        return (
          <p key={Object.keys(detail)}>
            {Object.keys(detail)} : {Object.values(detail)}
          </p>
        );
      })}

      <p>{infos.product_name}</p>
      <p>{infos.product_description}</p>

      {infos.owner.account.avatar ? (
        <img
          src={infos.owner.account.avatar.secure_url}
          alt="avatar de l'utilisateur"
        />
      ) : (
        <img
          src={EmptyAvatar}
          alt="avatar de l'utilisateur"
          style={{ borderRadius: "100%", width: "50px" }}
        />
      )}

      <p>{infos.owner.username}</p>
      <Button text="Acheter" />
    </aside>
  );
};

// Export component
export default OfferInfo;
