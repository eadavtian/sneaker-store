import React, { useState, useEffect } from "react";
import styles from "./Checkout.module.scss";

function Checkout() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvc, setCvc] = useState("");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const allInputsValid =
      name &&
      surname &&
      address &&
      city &&
      zipCode &&
      state &&
      paymentMethod &&
      (paymentMethod !== "paypal"
        ? cardNumber && expirationDate && cvc
        : paypalEmail);

    setFormValid(allInputsValid);
  }, [
    name,
    surname,
    address,
    city,
    zipCode,
    state,
    paymentMethod,
    cardNumber,
    expirationDate,
    cvc,
    paypalEmail,
  ]);

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const [orderCompleted, setOrderCompleted] = useState(false);
  const handleBuyButtonClick = (e) => {
    e.preventDefault();
    setOrderCompleted(true);
  };

  return (
    <>
      {orderCompleted ? (
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{
            minHeight: "50vh",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="img/complete-order.jpg"
            alt="Empty favorites"
            style={{ width: "200px", height: "230px" }}
          />
          <h2>Your order will be ship soon</h2>
          <p>Tracking Number: {Math.floor(Math.random() * 100000000)}</p>
        </div>
      ) : (
        <div className={styles.checkout}>
          <div className={styles.headline}>
            <h2>Checkout</h2>
            <p>*Be sure to fill in all fields!</p>
          </div>
          <form>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => handleInputChange(e, setName)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  id="surname"
                  value={surname}
                  onChange={(e) => handleInputChange(e, setSurname)}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => handleInputChange(e, setAddress)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="address">Zip Code</label>
              <input
                type="number"
                id="zip code"
                value={zipCode}
                onChange={(e) => handleInputChange(e, setZipCode)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="address">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => handleInputChange(e, setCity)}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="address">State</label>
              <input
                type="text"
                id="state"
                value={state}
                onChange={(e) => handleInputChange(e, setState)}
              />
            </div>
          </form>
          <div className={styles.paymentMethods}>
            <div className={styles.paymentMethodsTitle}>Payment Method</div>
            <div className={styles.paymentMethod}>
              <input
                type="radio"
                id="creditCard"
                name="payment"
                value="creditCard"
                onChange={(e) => handleInputChange(e, setPaymentMethod)}
              />
              <label htmlFor="creditCard">Credit Card</label>
            </div>
            <div className={styles.paymentMethod}>
              <input
                type="radio"
                id="debitCard"
                name="payment"
                value="debitCard"
                onChange={(e) => handleInputChange(e, setPaymentMethod)}
              />
              <label htmlFor="debitCard">Debit Card</label>
            </div>
            <div className={styles.paymentMethod}>
              <input
                type="radio"
                id="paypal"
                name="payment"
                value="paypal"
                onChange={(e) => handleInputChange(e, setPaymentMethod)}
              />
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>
          {paymentMethod === "creditCard" && (
            <div className={styles.cardInfo}>
              <div className={styles.formGroup}>
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="number"
                  id="cardNumber"
                  maxLength="20"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="expiration">Expiration Date</label>
                <input
                  type="date"
                  id="expiration"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="cvc">CVC</label>
                <input
                  type="number"
                  id="cvc"
                  maxLength="3"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </div>
          )}
          {paymentMethod === "debitCard" && (
            <div className={styles.cardInfo}>
              <div className={styles.cardInfo}>
                <div className={styles.formGroup}>
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="number"
                    id="cardNumber"
                    maxLength="20"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="expiration">Expiration Date</label>
                  <input
                    type="date"
                    id="expiration"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="number"
                    id="cvc"
                    maxLength="3"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
          {paymentMethod === "paypal" && (
            <div className={styles.paypalInfo}>
              <div className={styles.formGroup}>
                <label htmlFor="paypalEmail">PayPal Email</label>
                <input
                  type="email"
                  id="paypalEmail"
                  value={paypalEmail}
                  onChange={(e) => setPaypalEmail(e.target.value)}
                />
              </div>
            </div>
          )}
          <div className={styles.buttonContainer}>
            <button
              className={styles.buyButton}
              disabled={!formValid}
              type="submit"
              onClick={handleBuyButtonClick}
            >
              Buy
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Checkout;
