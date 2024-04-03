// ---------- CHECKOUTFORM Component ----------
// Packages Imports
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

// Components Imporst
import Button from "./Button";

// MUI Imports
import Container from "@mui/material/Container";

// Style Imports
import "../styles/CheckoutForm.css";

const CheckoutForm = ({
  title,
  price,
  priceProtection,
  priceTransport,
  total,
}) => {
  // States
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentIsDone, setPaymentIsDone] = useState(false);

  // Request to Stripe to confirm payment
  const stripe = useStripe();

  // Get inputs elements
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Start Loading
    setIsLoading(true);
    try {
      // Excluding condition :
      // If pb with elements => kill transaction
      if (elements == null) {
        return;
      }

      // Request to Stripe
      // IF all elements OK => destructuring and naming error key
      const { error: submitError } = await elements.submit();
      // Display error
      if (submitError) {
        setErrorMessage(submitError.message);
        return;
      }

      // Request to Back => create intent of payment and get clientSecret
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/v2/payment",
        {
          title: title,
          amount: price,
        }
      );
      const clientSecret = response.data.client_secret;

      // Request to Stripe : confirm payment with infos and configuration of payment
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements: elements,
        clientSecret: clientSecret,
        // Potential redicrection
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
        // Kill redirection
        redirect: "if_required",
      });

      // IF error during confirmation => show error msg to client
      if (error) {
        setErrorMessage(error.message);
      }

      // IF succeeded => setPayment completed = true
      if (paymentIntent.status === "succeeded") {
        setPaymentIsDone(true);
      }

      // End of loading
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return paymentIsDone ? (
    <main className="thanks__main">
      <Container maxWidth="lg" className="thanks__container">
        <div>
          <p>🥳 Merci pour votre achat </p>
          <p>Il sera bientôt en route ! ✈️</p>
        </div>
      </Container>
    </main>
  ) : (
    <main className="payment__main">
      <Container maxWidth="lg" className="payment__container">
        <div className="payment__frame">
          <h3>Résumé de la commande</h3>
          <div className="price__infos">
            <p className="price__infos--line">
              <span>Commande</span> <span>{price.toFixed(2)} €</span>
            </p>
            <p className="price__infos--line">
              <span>Frais protection acheteurs</span>{" "}
              <span>{priceProtection.toFixed(2)} €</span>
            </p>
            <p className="price__infos--line">
              <span>Frais de port</span>{" "}
              <span>{priceTransport.toFixed(2)} €</span>
            </p>
          </div>

          <div className="price__infos">
            <p className="price__infos--line2">
              <span>Total</span> <span>{total / 100} €</span>
            </p>
            <div>
              <p className="price__infos--last">
                Il ne vous reste plus qu'un étape pour vous offrir
                <span>{title}</span>.<br />
                Vous allez payer <span>{total / 100}</span> € (frais de
                protection et frais de port inclus).
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="payment__form">
            <PaymentElement />
            <Button
              type="submit"
              text="Pay"
              disabled={!stripe || !elements || isLoading}
            />
            {errorMessage && <p className="form__error">{errorMessage}</p>}
          </form>
        </div>
      </Container>
    </main>
  );
};

// Export component
export default CheckoutForm;
