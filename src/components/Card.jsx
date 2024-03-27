// ---------- CARD Component ----------
const Card = ({ offer }) => {
  return (
    <article>
      <img
        src={offer.owner.account.avatar.secure_url}
        alt=""
        style={{ borderRadius: "100%", width: "50px" }}
      />
      <p>{offer.owner.account.username}</p>
      <img
        style={{ width: "150px" }}
        src={offer.product_image.secure_url}
        alt={offer.product_description}
      />
      <p>{offer.product_price} €</p>

      {/* {offer.product_details.map((detail) => {
        return (
          <div>
            <p>{detail.TAILLE}</p>
            <p>{detail.MARQUE}</p>
          </div>
        );
      })} */}

      {offer.product_details.map((detail) => {
        return <p key={Object.keys(detail)}>{detail.TAILLE}</p>;
      })}
      {offer.product_details.map((detail) => {
        return <p key={Object.keys(detail)}>{detail.MARQUE}</p>;
      })}
    </article>
  );
};

export default Card;
