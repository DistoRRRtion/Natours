/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51Mu9AYB3hcxdXX8ax861zyktN8QZbnV41ctCWhzEVUUG5VbbFTdITrPHZAbjbd6jy1epSYGzz5v4BSCeZnw5GYKa00HjZikN2T'
);

export const bookTour = async (tourId) => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`
    );

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    showAlert('error', err);
  }
};
