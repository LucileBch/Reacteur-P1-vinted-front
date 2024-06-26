// ---------- PAYMENT Page ----------
// Packages Imports
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Navigate, useLocation } from "react-router-dom";

// Component Imports
import CheckoutForm from "../components/CheckoutForm";

// Connecting Stripe account (with le reacteur API key)
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token }) => {
  // Getting props from Link with useLocation IF token & location.state
  const location = useLocation();

  let price;
  let title;

  if (token) {
    price = location.state?.price;
    title = location.state?.title;
  }

  // Calcul prices and total
  let priceProtection = price / 10;
  let priceTransport = price / 5;
  let total =
    Number((price * 100).toFixed(0)) +
    Number((priceProtection * 100).toFixed(0)) +
    Number((priceTransport * 100).toFixed(0));

  // Mode of payment, amount and currency
  const options = {
    mode: "payment",
    amount: total,
    currency: "eur",
  };

  // Component Elements => payment logic
  // With proof of connection to Stripe account and payment options
  // Redirecting to home IF no token && location state
  return !token ? (
    <Navigate to={"/"} state={{ info: "login" }} />
  ) : (
    token && location.state && (
      <Elements stripe={stripePromise} options={options}>
        <CheckoutForm
          title={title}
          price={price}
          priceProtection={priceProtection}
          priceTransport={priceTransport}
          total={total}
        />
      </Elements>
    )
  );
};

// Export page
export default Payment;
