const Carousel = ({ infos }) => {
  console.log(infos);
  return (
    <>
      {infos.product_pictures.map((picture) => {
        return (
          <img
            key={picture.asset_id}
            src={picture.secure_url}
            alt={infos.product_name}
          />
        );
      })}
    </>
  );
};

export default Carousel;
