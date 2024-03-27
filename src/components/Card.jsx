// ---------- CARD Component ----------
const Card = ({ offer }) => {
  return (
    <article>
      <p>{offer.owner.account.username}</p>
      <img
        style={{ width: "150px" }}
        src={offer.product_image.secure_url}
        alt={offer.product_description}
      />
      <p>{offer.product_price} €</p>
      <p>{offer.product_name}</p>
      <p>{offer.product_description}</p>
    </article>
  );
};

export default Card;
