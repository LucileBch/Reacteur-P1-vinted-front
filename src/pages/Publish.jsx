// ---------- PUBLISH Page ----------
// Packages Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Components Imports
import Input from "../components/Input";

// MUI Imports
import Container from "@mui/material/Container";

// Styles Imports
import "../styles/Publish.css";

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
    <main className="publish__main">
      <Container maxWidth="lg">
        <h1>Vends ton article</h1>
        <form onSubmit={handleSubmit} className="publish__form">
          <div className="publish__form--picture">
            {/* <div className="upload__picture"> */}
            {picture && (
              <img
                className="upload__picture--display"
                src={URL.createObjectURL(picture)}
                alt="produit"
              />
            )}
            <label htmlFor="picture" className="upload__picture">
              Ajouter une photo
            </label>
            <Input
              type="file"
              name="picture"
              placeholder="Ajouter une photo"
              state={picture}
              setState={setPicture}
            />
            {/* </div> */}
          </div>

          <div className="publish__form--section">
            <div className="publish__form--input">
              <label htmlFor="title">Titre</label>
              <Input
                type="text"
                placeholder="ex: Chemise Sézane verte"
                name="title"
                state={title}
                setState={setTitle}
              />
            </div>
            <div className="publish__form--input">
              <label htmlFor="description">Décris ton article</label>
              <Input
                type="textarea"
                row={6}
                cols={30}
                placeholder="ex: porté quelque fois, taille correctement"
                name="description"
                state={description}
                setState={setDescription}
              />
            </div>
          </div>

          <div className="publish__form--section">
            <div className="publish__form--input">
              <label htmlFor="brand">Marque</label>
              <Input
                type="text"
                placeholder="ex: Zara"
                name="brand"
                state={brand}
                setState={setBrand}
              />
            </div>

            <div className="publish__form--input">
              <label htmlFor="size">Taille</label>
              <Input
                type="text"
                placeholder="ex: L / 40 / 12"
                name="brand"
                state={size}
                setState={setSize}
              />
            </div>

            <div className="publish__form--input">
              <label htmlFor="color">Couleur</label>
              <Input
                type="text"
                placeholder="ex: Fushia"
                name="color"
                state={color}
                setState={setColor}
              />
            </div>

            <div className="publish__form--input">
              <label htmlFor="condition">État</label>
              <Input
                type="text"
                placeholder="ex: Neuf avec étiquette"
                name="condition"
                state={condition}
                setState={setCondition}
              />
            </div>

            <div className="publish__form--input">
              <label htmlFor="city">Lieu</label>
              <Input
                type="text"
                placeholder="ex: Paris"
                name="city"
                state={city}
                setState={setCity}
              />
            </div>
          </div>

          <div className="publish__form--section">
            <div className="publish__form--input">
              <label htmlFor="price">Prix</label>
              <Input
                type="number"
                placeholder="ex: 0,00 €"
                name="price"
                state={price}
                setState={setPrice}
              />
            </div>

            <div className="publish__form--inputcheck">
              <input type="checkbox" name="exchange" />
              <p>Je suis intéressé(e) par les échanges</p>
            </div>
          </div>

          <input className="form__publish" type="submit" value="Ajouter" />
        </form>
      </Container>
    </main>
  );
};

// Export page
export default Publish;
