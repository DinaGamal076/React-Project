import React, { useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Card, CardContent, Typography } from "@mui/material";
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product = {}, totalPrice } = location.state || {};

  const [amount, setAmount] = useState(totalPrice || "");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!amount || amount <= 0) {
      newErrors.amount = "Amount must be greater than 0.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address.";
    }

    const phoneRegex = /^(010|011|012|015)\d{8}$/;
    if (!phone || !phoneRegex.test(phone)) {
      newErrors.phone = "Enter a valid Egyptian phone number (11 digits).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayment = async () => {
    if (!validateForm()) return;

    try {
      const tokenRes = await axios.post("http://localhost:5000/get-token");
      const authToken = tokenRes.data.token;

      const orderRes = await axios.post("http://localhost:5000/create-order", {
        token: authToken,
        amount: amount
      });
      const orderId = orderRes.data.orderId;

      const paymentKeyRes = await axios.post("http://localhost:5000/get-payment-key", {
        token: authToken,
        orderId: orderId,
        amount: amount,
        customerEmail: email,
        customerPhone: phone,
      });
      const paymentKey = paymentKeyRes.data.paymentKey;

      window.location.href = `https://accept.paymob.com/api/acceptance/iframes/910857?payment_token=${paymentKey}`;
    } catch (error) {
      setErrors({ form: "Payment failed. Please try again." });
      console.error("Payment Error:", error);
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Card sx={{ padding: "20px", boxShadow: 3, borderRadius: 2 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom align="center">
            Pay with Paymob
          </Typography>
          {errors.form && <Typography color="error" align="center">{errors.form}</Typography>}

          {Object.keys(product).length === 0 ? (
            <Typography variant="body1" color="error" align="center">
              No product selected. Please go back to the cart and select a product.
            </Typography>
          ) : (
            <>
              <Typography variant="h6" gutterBottom>
                Product: {product.title}
              </Typography>
              <Typography variant="body1">
                Total Price: ${totalPrice.toFixed(2)}
              </Typography>
            </>
          )}

          <TextField
            label="Amount (EGP)"
            type="number"
            variant="outlined"
            fullWidth
            margin="normal"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            error={!!errors.amount}
            helperText={errors.amount}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Phone Number"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={!!errors.phone}
            helperText={errors.phone}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handlePayment}
            sx={{ marginTop: 2 }}
          >
            Pay Now
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            fullWidth
            onClick={() => navigate('/cart')}
            sx={{ marginTop: 2 }}
          >
            Back to Cart
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Payment;