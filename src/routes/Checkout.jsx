import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// component
import CheckoutSummary from "../components/Checkout/CheckoutSummary";
import CheckoutFinal from "../components/Checkout/CheckoutFinal";

// image
import formFooter from "../assets/formFooter.png";

import { Fade } from "react-awesome-reveal";

// css
import "./Checkout.css";


function Checkout() {
  const [isOpen,setIsOpen] = useState(false)

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: null,
    address: "",
    zipCode: null,
    city: "",
    country: "",
    method: "",
    eNumber: null,
    ePIN: null,
  });
  const [isEMoney, setIsEMoney] = useState(false);
  const [isCash, setIsCash] = useState(false);

  const handleCashClick = () => {
    setIsEMoney(false);
    setIsCash(true);
  };

  const handleEMoneyClick = () => {
    setIsCash(false);
    setIsEMoney(true);
  };

  const handleOnClose = () => {
    setIsOpen(false)
  }

  let submitButtonHelper;

  if (isEMoney) {
    submitButtonHelper = "Continue & Pay";
  } else {
    submitButtonHelper = "Continue";
  }

  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is required"),
    email: yup.string().email().required("Email is required"),
    phoneNumber: yup.string().required("Wrong Format").min(8).max(15),
    address: yup.string().required("Address is required"),
    zipCode: yup.string().required("ZIP Code is required").min(4).max(5),
    city: yup.string().required("City is required").min(2),
    country: yup.string().required("Country is required"),
    method: yup.string().required("Please choose method of your payment"),
    eNumber: yup.string().max(12),
    ePIN: yup.string().max(4),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setCustomerInfo({
      name: data.fullName,
      email: data.email,
      phone: data.phoneNumber,
      address: data.address,
      zipCode: data.zipCode,
      city: data.city,
      country: data.country,
      method: data.method,
    });
    setIsOpen(true)
    reset()
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="checkout-container">
        <Fade className="checkout-info" triggerOnce>
          <h3>CHECKOUT</h3>
          <div className="billing-details">
            <p className="subtitle">Billing details</p>
            <div className="bd-container">
              <div className="input-box">
                <div className="label-box">
                  <label htmlFor="name">Name</label>
                  <p className="error-message">{errors.fullName?.message}</p>
                </div>
                <input
                  type="text"
                  placeholder="Alexei Ward"
                  id="name"
                  {...register("fullName")}
                />
              </div>
              <div className="input-box">
                <div className="label-box">
                  <label htmlFor="email">Email Address</label>
                  <p className="error-message">{errors.email?.message}</p>
                </div>

                <input
                  type="email"
                  placeholder="alexei@mail.com"
                  id="email"
                  {...register("email")}
                />
              </div>
              <div className="input-box">
                <div className="label-box">
                  <label htmlFor="phone-number">Phone Number</label>
                  <p className="error-message">{errors.phoneNumber?.message}</p>
                </div>

                <input
                  type="text"
                  placeholder="+1 202-555-0136"
                  id="phone-number"
                  {...register("phoneNumber")}
                />
              </div>
            </div>
          </div>

          <div className="shipping-info">
            <p className="subtitle">Shipping info</p>
            <div className="bd-container">
              <div className="input-box">
                <div className="label-box">
                  <label htmlFor="address">Address</label>
                  <p className="error-message">{errors.address?.message}</p>
                </div>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  id="address"
                  {...register("address")}
                />
              </div>
              <div className="input-box">
                <div className="label-box">
                  <label htmlFor="zipCode">ZIP Code</label>
                  <p className="error-message">{errors.zipCode?.message}</p>
                </div>

                <input
                  type="number"
                  placeholder="10001"
                  id="zipCode"
                  {...register("zipCode")}
                />
              </div>
              <div className="input-box">
                <div className="label-box">
                  <label htmlFor="city">City</label>
                  <p className="error-message">{errors.city?.message}</p>
                </div>

                <input
                  type="text"
                  placeholder="New York"
                  id="city"
                  {...register("city")}
                />
              </div>
              <div className="input-box">
                <div className="label-box">
                  <label htmlFor="country">Country</label>
                  <p className="error-message">{errors.country?.message}</p>
                </div>

                <input
                  type="text"
                  placeholder="United States"
                  id="country"
                  {...register("country")}
                />
              </div>
            </div>
          </div>

          <div className="payment-details">
            <p className="subtitle">Payment details</p>
            <div className="payment-container">
              <label>Payment Method</label>
              <div className="pd-wrapper">
                <p className="error-message">{errors.method?.message}</p>
                <div className="payment-box">
                  <input
                    type="radio"
                    name="method"
                    id="e-money"
                    value="E-money"
                    {...register("method")}
                    onClick={handleEMoneyClick}
                  />
                  <label htmlFor="e-money">e-Money</label>
                </div>
                <div className="payment-box">
                  <input
                    type="radio"
                    name="method"
                    id="cash-on-delivery"
                    value="Cash"
                    {...register("method")}
                    onClick={handleCashClick}
                  />
                  <label htmlFor="cash-on-delivery">Cash on Delivery</label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-footer">
            {isCash && (
              <>
                <img
                  src={formFooter}
                  alt="Cash on delivery"
                  className="cash-image"
                />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </>
            )}
            {isEMoney && (
              <>
                <div className="input-box">
                  <div className="label-box">
                    <label htmlFor="eNumber">e-Money Number</label>
                    <p className="error-message">{errors.eNumber?.message}</p>
                  </div>

                  <input
                    type="text"
                    placeholder="238521993"
                    id="eNumber"
                    {...register("eNumber")}
                  />
                </div>
                <div className="input-box">
                  <div className="label-box">
                    <label htmlFor="ePIN">e-Money PIN</label>
                    <p className="error-message">{errors.ePIN?.message}</p>
                  </div>

                  <input
                    type="password"
                    placeholder="6891"
                    id="ePIN"
                    {...register("ePIN")}
                  />
                </div>
              </>
            )}
          </div>
        </Fade>
      </div>

      <div className="cart-container">
        <CheckoutSummary />
        <button type="submit" className="cont-pay" >
          {submitButtonHelper}
        </button>
      </div>
    </form>
    <CheckoutFinal {...customerInfo} isOpen={isOpen} onClose={handleOnClose} />
    </>
    
  );
}

export default Checkout;
