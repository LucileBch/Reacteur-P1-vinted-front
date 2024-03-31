// ---------- OFFERCARD Component ----------
// MUI Imports
import Box from "@mui/material/Box";

// Assets and Style Imports
import "../styles/OfferCard.css";
import EmptyAvatar from "../assets/img/user-empty-avatar.svg";

const OfferCard = ({ offer }) => {
  return (
    <article>
      <Box className="offercard__title">
        {offer.owner.account.avatar ? (
          <img
            src={offer.owner.account.avatar.secure_url}
            alt="avatar de l'utilisateur"
          />
        ) : (
          <img src={EmptyAvatar} alt="avatar de l'utilisateur" />
        )}
        <p>{offer.owner.account.username}</p>
      </Box>

      <img
        className="offercard__img"
        src={offer.product_image.secure_url}
        alt={offer.product_name}
      />
      <Box className="offercard__content">
        <p className="offercard__content--price">{offer.product_price} €</p>
        <p className="offercard__content--details">
          {offer.product_details[1].TAILLE}
        </p>
        <p className="offercard__content--details">
          {offer.product_details[0].MARQUE}
        </p>
      </Box>
    </article>
  );
};

// Export component
export default OfferCard;
