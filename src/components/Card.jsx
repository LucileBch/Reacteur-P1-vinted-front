// ---------- CARD Component ----------
const Card = ({ offer }) => {
  return (
    <article>
      <img
        src={offer.owner.account.avatar.secure_url}
        alt="avatar de l'utilisateur"
        style={{ borderRadius: "100%", width: "50px" }}
      />
      <p>{offer.owner.account.username}</p>
      <img
        style={{ width: "150px" }}
        src={offer.product_image.secure_url}
        alt={offer.product_name}
      />
      <p>{offer.product_price} €</p>
      <p>{offer.product_details[1].TAILLE}</p>
      <p>{offer.product_details[0].MARQUE}</p>
    </article>
  );
};

export default Card;
