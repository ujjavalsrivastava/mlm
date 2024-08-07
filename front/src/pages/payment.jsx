import React, { useState } from "react";
import { axios } from "../helper/httpHelper";

const Checkout = () => {
  const [orderId, setOrderId] = useState("");
  const [paid, setPaid] = useState({});

  const createOrder = async () => {
    try {
      const response = await axios.post("/create/order", {
        amount: 100 * 100,
        currency: "INR",
        receipt: "xyz product purchased",
      });

      setOrderId(response.data.order_id);
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  const handlePaymentComplete = (response) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      response;
    console.log({ response });
  };

  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_PAYMENT_KEY, // Enter the Key ID generated from the Dashboard
      amount: 100 * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Merchant Name",
      description: "Test Transaction",
      order_id: orderId, // This is a sample Order ID. Pass the `id` obtained in the previous step
      handler: handlePaymentComplete,
      prefill: {
        name: "Test User",
        email: "test.user@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Test Address",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={createOrder}>Create Order</button>
      {orderId && <button onClick={handlePayment}>Pay Now</button>}
    </div>
  );
};

export default Checkout;
