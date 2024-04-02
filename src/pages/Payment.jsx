// ---------- PAYMENT Page ----------
// Packages Imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

// Component Imports
import CheckoutForm from "../components/CheckoutForm";

// Connecting Stripe account (with le reacteur API key)
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ filterDisplay, setFilterDisplay }) => {
  // Disable filters
  if (filterDisplay === true) {
    setFilterDisplay(false);
  }

  // Getting props by Link with useLocation
  const location = useLocation();
  const { title, price } = location.state;

  // Mode of payment, amount and currency
  const options = {
    mode: "payment",
    amount: Number((price * 100).toFixed(0)),
    currency: "eur",
  };

  // Component Elements = payment logic
  // With proof of connection to Stripe account and payment options
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm title={title} price={price} />
    </Elements>
  );
};

export default Payment;
