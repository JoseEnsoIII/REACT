import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer/footer';
import Navbar from '../../components/Header/navbar';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center vertically */
  justify-content: center;
  height: 180vh;
  width: 100vw;
  background-color:gray;
`;

const PaymentForm = styled.div`
  text-align: center;
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  height: 100%;
  margin-top: 15px;
  margin-bottom: 100px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const RadioButton = styled.input`
  margin-right: 5px;
`;

const SelectBox = styled.select`
  margin-right: 5px;
`;

const SubmitButton = styled.input`
  background-color: #0074d9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin:5px;
`;
const LinkButton = styled.a`
  background-color: #0074d9;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  text-decoration: none; /* Remove default link underline */
  display: inline-block;
`;
const TotalPrice = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
`;

const PaymentPage = () => {
  const [plan, setPlan] = useState('basic');
  const [paymentPlan, setPaymentPlan] = useState('monthly');
  const [paymentType, setPaymentType] = useState('paypal');

  const planPrices = {
    free: 0,
    basic: 10,
    premium: 20,
  };

  const paymentPlanPrices = {
    monthly: 1,
    yearly: 10,
  };

  const paymentTypePrices = {
    credit: 5,
    debit: 5,
    paypal: 2,
    gcash: 3,
  };

  const calculateTotalPrice = () => {
    const planPrice = planPrices[plan];
    const paymentPlanPrice = paymentPlanPrices[paymentPlan];
    const paymentTypePrice = paymentTypePrices[paymentType];

    return planPrice + paymentPlanPrice + paymentTypePrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form submission here
    const totalPrice = calculateTotalPrice();
    setTotalPrice(totalPrice);
  };

  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <CenteredContainer>
        <Navbar/>
      <PaymentForm className="form" onSubmit={handleSubmit}> 
      <Title>Checkout Form</Title>
        <Section className="plan">
          <h2>Choose a plan:</h2>
          <Label>
            <RadioButton
              type="radio"
              name="plan"
              value="free"
              checked={plan === 'free'}
              onChange={() => setPlan('free')}
            />
            Free ($0)
          </Label>
          <Label>
            <RadioButton
              type="radio"
              name="plan"
              value="basic"
              checked={plan === 'basic'}
              onChange={() => setPlan('basic')}
            />
            Basic ($10)
          </Label>
          <Label>
            <RadioButton
              type="radio"
              name="plan"
              value="premium"
              checked={plan === 'premium'}
              onChange={() => setPlan('premium')}
            />
            Premium ($20)
          </Label>
        </Section>

        <Section className="payment-plan">
          <h2>Select a payment plan:</h2>
          <Label>
            <RadioButton
              type="radio"
              name="paymentPlan"
              value="monthly"
              checked={paymentPlan === 'monthly'}
              onChange={() => setPaymentPlan('monthly')}
            />
            Monthly ($1)
          </Label>
          <Label>
            <RadioButton
              type="radio"
              name="paymentPlan"
              value="yearly"
              checked={paymentPlan === 'yearly'}
              onChange={() => setPaymentPlan('yearly')}
            />
            Yearly ($10)
          </Label>
        </Section>

        <Section className="payment-type">
          <h2>Select a payment type:</h2>
          <Label>
            <RadioButton
              type="radio"
              name="paymentType"
              value="credit"
              checked={paymentType === 'credit'}
              onChange={() => setPaymentType('credit')}
            />
            Credit Card ($5)
          </Label>
          <Label>
            <RadioButton
              type="radio"
              name="paymentType"
              value="debit"
              checked={paymentType === 'debit'}
              onChange={() => setPaymentType('debit')}
            />
            Debit Card ($5)
          </Label>
          <Label>
            <RadioButton
              type="radio"
              name="paymentType"
              value="paypal"
              checked={paymentType === 'paypal'}
              onChange={() => setPaymentType('paypal')}
            />
            Paypal ($2)
          </Label>
          <Label>
            <RadioButton
              type="radio"
              name="paymentType"
              value="gcash"
              checked={paymentType === 'gcash'}
              onChange={() => setPaymentType('gcash')}
            />
            G-Cash ($3)
          </Label>
        </Section>

        <SubmitButton className="submit" type="submit" value="Submit" /><br/>
        <LinkButton href="/">Click Me</LinkButton>
        <TotalPrice>Total Price: ${totalPrice}</TotalPrice>
      </PaymentForm>

      <Footer/>
    </CenteredContainer>
  );
};

export default PaymentPage;
