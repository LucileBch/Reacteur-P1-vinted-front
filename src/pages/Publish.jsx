// ---------- PUBLISH Page ----------
// Packages Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Components Imports
import Input from "../components/Input";

// MUI Imports
import Container from "@mui/material/Container";

const Publish = ({ token }) => {
  // States
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [picture, setPicture] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("picture", picture);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      navigate(`/offers/${response.data._id}`);

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <Container maxWidth="lg">
      <h1>Vends ton article</h1>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          gap: "20px",
        }}
      >
        <label htmlFor="picture">Ajouter une photo</label>
        <Input
          type="file"
          name="picture"
          placeholder="Ajouter une photo"
          state={picture}
          setState={setPicture}
        />

        <label htmlFor="title">Titre</label>
        <Input
          type="text"
          placeholder="ex: Chemise Sézane verte"
          name="title"
          state={title}
          setState={setTitle}
        />

        <label htmlFor="description">Décris ton article</label>
        <Input
          type="text"
          placeholder="ex: porté quelque fois, taille correctement"
          name="description"
          state={description}
          setState={setDescription}
        />

        <label htmlFor="brand">Marque</label>
        <Input
          type="text"
          placeholder="ex: Zara"
          name="brand"
          state={brand}
          setState={setBrand}
        />

        <label htmlFor="size">Taille</label>
        <Input
          type="text"
          placeholder="ex: L / 40 / 12"
          name="brand"
          state={size}
          setState={setSize}
        />

        <label htmlFor="color">Couleur</label>
        <Input
          type="text"
          placeholder="ex: Fushia"
          name="color"
          state={color}
          setState={setColor}
        />

        <label htmlFor="condition">État</label>
        <Input
          type="text"
          placeholder="ex: Neuf avec étiquette"
          name="condition"
          state={condition}
          setState={setCondition}
        />

        <label htmlFor="city">Lieu</label>
        <Input
          type="text"
          placeholder="ex: Paris"
          name="city"
          state={city}
          setState={setCity}
        />

        <label htmlFor="price">Prix</label>
        <Input
          type="number"
          placeholder="ex: 0,00 €"
          name="price"
          state={price}
          setState={setPrice}
        />

        <input type="checkbox" name="exchange" />
        <p>Je suis intéressé(e) par les échanges</p>

        <input type="submit" value="Ajouter" />
      </form>
    </Container>
  );
};

// Export page
export default Publish;
