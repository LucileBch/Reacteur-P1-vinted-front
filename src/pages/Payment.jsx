// ---------- PAYMENT Page ----------
// Packages Imports
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Navigate, useLocation } from "react-router-dom";

// Component Imports
import CheckoutForm from "../components/CheckoutForm";

// Connecting Stripe account (with le reacteur API key)
const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = ({ token, filterDisplay, setFilterDisplay }) => {
  // Disable filters
  if (filterDisplay === true) {
    setFilterDisplay(false);
  }

  // Getting props from Link with useLocation IF token & location.state
  const location = useLocation();

  let price;
  let title;

  if (token) {
    price = location.state?.price;
    title = location.state?.title;
  }

  // Mode of payment, amount and currency
  const options = {
    mode: "payment",
    amount: Number((price * 100).toFixed(0)),
    currency: "eur",
  };

  // Component Elements => payment logic
  // With proof of connection to Stripe account and payment options
  // Redirecting to home IF no token && location state
  return token && location.state ? (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm title={title} price={price} />
    </Elements>
  ) : (
    <Navigate to="/"></Navigate>
  );
};

// Export page
export default Payment;
