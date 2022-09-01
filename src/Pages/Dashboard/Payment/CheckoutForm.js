import React, { useEffect, useState } from "react";
import {CardElement, Elements, useElements, useStripe} from '@stripe/react-stripe-js';
import useAuth from "../../../hooks/useAuth";
import { CircularProgress } from "@mui/material";

const CheckoutForm = ({appointment}) => {
    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);
    const {email} = useAuth();
    const {price, patientName, _id} = appointment;
    const stripe = useStripe();
    const elements = useElements();

    const [success, setSuccess] = useState('');

    const [clientSecret, setClientSecret] = useState('');
    useEffect(() => {
        fetch('https://aqueous-plateau-48297.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({price})
        })
        .then(res=>res.json())
        .then(data => setClientSecret(data.clientSecret))
    },[price])

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        } 
        setProcessing(true);
        const card = elements.getElement(CardElement);
        if(card === null){
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error){
            setError(error.message);
            console.log(error);
        }
        else{
            setError('');
            console.log(paymentMethod);
        }

        //payment intent 
        const {paymentIntent, error: intrentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: email
                },
              },
            },
          );
          if(intrentError){
              setSuccess('');
              setError(intrentError.message);
              setProcessing(false);
          }
          else{
            setError('');
            setSuccess('Payment processed Successfully');
            const payment = {
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                secret: paymentIntent.client_secret.split('_secret')[0],
                last4: paymentMethod.card.last4
            }
            fetch(`https://aqueous-plateau-48297.herokuapp.com/appointments/${_id}`,{
                method: 'PUT',
                headers: {
                   "constent-type": 'application/json' 
                },
                body: JSON.stringify(payment)
            })
            console.log(paymentIntent);
            setProcessing(false);
          }

        
    }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {processing ? <CircularProgress/> :<button type="submit" disabled={!stripe || success}>
        Pay ${price} 
      </button>}
      { error && <p style={{color: 'red'}}>{error}</p> }
      { success && <p style={{color:'green'}}>{success}</p>}
    </form>
    
  );
};

export default CheckoutForm;
