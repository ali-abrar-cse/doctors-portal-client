import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { loadStripe } from "@stripe/stripe-js";
import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from "./CheckoutForm";
// import {CardElement, Elements, useElements, useStripe} from '../../src';

const stripePromise = loadStripe(
  "pk_test_51JwjGoEhPQQvMREtGfppufh0wqhMHAdtrxZhEJqvhIwX3Ht5UQVHRDZImCKMvKlq3RjdtQjhkrJLlzpVCYN1f2PO00HuQnqXym"
);

const Payment = () => {
  const [appointment, setAppointment] = useState({});
  const { appointmentId } = useParams();

  useEffect(() => {
    fetch(`https://aqueous-plateau-48297.herokuapp.com/appointments/${appointmentId}`)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [appointmentId]);

  return (
    <div>
      <h2>Please pay for: {appointment.serviceName}</h2>
      <h2>
        Pay $ {appointment.price} for {appointment.patientName}'s appointment.
      </h2>
      {appointment.price && <Elements stripe={stripePromise}>
        <CheckoutForm appointment = {appointment}/>
      </Elements>}
    </div>
  );
};

export default Payment;

/*
1. Install stripe and stripe react.
2. set publishable key.
3. Wrap component with Element.
4. Checout form.
-------------------------------
5. Create payment method
*/