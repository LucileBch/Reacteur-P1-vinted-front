// ---------- OFFER Page ----------
// Import components
import Button from "./Button";

const OfferInfo = ({ infos }) => {
  return (
    <aside>
      <p>{infos.product_price}</p>

      {infos.product_details.map((detail) => {
        return (
          <p key={Object.keys(detail)}>
            {Object.keys(detail)} : {Object.values(detail)}
          </p>
        );
      })}

      <p>{infos.product_name}</p>
      <p>{infos.product_description}</p>
      <p>{infos.owner.username}</p>
      <Button text="Acheter" />
    </aside>
  );
};

export default OfferInfo;
