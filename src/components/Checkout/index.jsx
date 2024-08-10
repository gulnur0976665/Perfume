import React, { useState } from "react";
import { useSelector } from "react-redux";
import InputMask from "react-input-mask";
import CountUp from "react-countup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { HiMiniCheckBadge } from "react-icons/hi2";

const Checkout = () => {
  const { basket } = useSelector((state) => state.bas);

  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(true);

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userCart, setUserCart] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [shippingMethod, setShippingMethod] = useState(null);

  const totalPrice = basket.reduce(
    (acc, el) => acc + el.price * el.quantity,
    0
  );
  const shippingCost = shippingMethod === "homeDelivery" ? 10 : 0;

  const getToast = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const formSubmit = () => {
    if (
      userName.trim() === "" ||
      userEmail.trim() === "" ||
      userPhone.trim() === "" ||
      userCart.trim() === "" ||
      !shippingMethod
    ) {
      getToast("Заполните пустые ячейки!");
      return;
    }

    const my_id = `-1002172754943`;
    const token = `6780539797:AAHL_j701L6aQsn8CzkibXgjXeBwA67_NLc`;
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;

    let newOrder = {
      chat_id: my_id,
      parse_mode: "html",
      text: `Order Details:
        Name: ${userName}
        Email: ${userEmail}
        Phone: ${userPhone}
        Card: ${userCart}
        Shipping Method: ${
          shippingMethod === "homeDelivery"
            ? "At Home Delivery"
            : "Pick up in Post Office"
        }
        Total Price: $${totalPrice + shippingCost}
      `,
    };

    axios.post(url_api, newOrder);

    setUserName("");
    setUserEmail("");
    setUserPhone("");
    setUserCart("");
    setShippingMethod(null);
    setModal(true);
    setModal1(false);
  };

  return (
    <div>
      <div className="container">
        <div className="">
          {modal1 ? (
            <div className="flex items-center flex-col gap-10 mx-auto my-[30px]">
              <div className="w-[93%] h-full bg-[hsla(0,0%,85%,1)] flex items-center flex-wrap gap-16 max-[1200px]:gap-[2px] py-4">
                {basket.map((el) => (
                  <div className="flex items-center" key={el.id}>
                    <div className="flex flex-col gap-2 max-[1200px]:gap-5 px-14">
                      <img
                        src={el.url}
                        alt="img"
                        className="w-[120px] h-[120px] object-cover"
                      />
                      <h1 className="text-[13px] font-semibold text-gray-800 text-center">
                        {el.title}
                      </h1>
                    </div>
                    <div className="flex items-start flex-col gap-2 pr-5 max-[1200px]:pr-1">
                      <h1 className="text-[15px] font-semibold">
                        $ {el.price}
                      </h1>
                      <h1 className="text-[15px] font-semibold">
                        Quantity: {el.quantity}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[93%] h-[400px] max-lg:h-[730px] bg-[hsla(0,0%,85%,1)]">
                <h1 className="flex items-center justify-center mt-5 text-[25px] font-semibold">
                  PAYMENT DETAILS
                </h1>
                <div className="flex items-start justify-around max-lg:flex-col max-lg:items-center">
                  <div className="flex items-start flex-col gap-3">
                    <div className="flex flex-col items-center">
                      <h1 className="font-bold">Full Name:</h1>
                      <input
                        onChange={(e) => setUserName(e.target.value)}
                        value={userName}
                        type="text"
                        className="w-[385px] max-sm:w-[300px] h-[44px] bg-transparent border-2 border-black rounded-2xl px-[8px]"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="font-bold">E-mail address:</h1>
                      <input
                        onChange={(e) => setUserEmail(e.target.value)}
                        value={userEmail}
                        type="text"
                        className="w-[385px] max-sm:w-[300px] h-[44px] bg-transparent border-2 border-black rounded-2xl px-[8px]"
                      />
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="font-bold">Phone:</h1>
                      <div>
                        <InputMask
                          mask="+\9\96 (999)-999-999"
                          value={userPhone}
                          onChange={(e) => setUserPhone(e.target.value)}>
                          {(inputProps) => (
                            <input
                              {...inputProps}
                              type="text"
                              className="w-[385px] max-sm:w-[300px] h-[44px] bg-transparent border-2 border-black rounded-2xl outline-none text-[17px] px-[8px]"
                              placeholder="+996"
                            />
                          )}
                        </InputMask>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <h1 className="font-bold">Card Details:</h1>
                      <div>
                        <InputMask
                          mask="9999-9999-9999-9999"
                          value={userCart}
                          onChange={(e) => setUserCart(e.target.value)}>
                          {(inputProps) => (
                            <input
                              {...inputProps}
                              type="text"
                              className="w-[385px] max-sm:w-[300px] h-[44px] bg-transparent border-2 border-black rounded-2xl outline-none text-[17px] px-[8px]"
                              placeholder=""
                            />
                          )}
                        </InputMask>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center flex-col gap-5">
                    <h1 className="text-[18px] font-semibold">
                      Shipping Method
                    </h1>
                    <div className="flex items-center gap-10">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          name="shippingMethod"
                          className="w-[25px] h-[25px] border-2 border-black bg-transparent"
                          onChange={() => setShippingMethod("postOffice")}
                          checked={shippingMethod === "postOffice"}
                        />
                        <h1>Pick up in Post Office</h1>
                      </div>
                      <span className="font-bold">FREE</span>
                    </div>
                    <div className="flex items-center gap-16">
                      <div className="flex items-start gap-7">
                        <input
                          type="checkbox"
                          name="shippingMethod"
                          className="w-[25px] h-[25px] border-2 border-black bg-transparent"
                          onChange={() => setShippingMethod("homeDelivery")}
                          checked={shippingMethod === "homeDelivery"}
                        />
                        <h1>At Home Delivery</h1>
                      </div>
                      <span className="font-bold">$10</span>
                    </div>
                    <div className="border-[3px] border-black w-[408px] max-sm:w-[320px] h-[136px] bg-transparent flex items-start justify-between px-5 py-5">
                      <div className="flex items-start flex-col gap-3">
                        <h1>Subtotal</h1>
                        <h1>Shipping</h1>
                        <h1 className="font-bold">Total</h1>
                      </div>
                      <div className="flex items-start flex-col gap-3">
                        <h1>{totalPrice} $</h1>
                        <h1>{shippingCost} $</h1>
                        <h1 className="font-bold">
                          {" "}
                          <CountUp
                            start={0}
                            end={totalPrice + shippingCost}
                            duration={2.55}
                            separator=" "
                            decimals={0}
                            decimal=" "
                          />{" "}
                          $
                        </h1>
                      </div>
                    </div>
                    <button
                      onClick={formSubmit}
                      className="bg-[hsla(208,14%,49%,1)] w-[240px] h-[44px] border-2 border-black rounded-lg text-white font-semibold">
                      PAY NOW
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {modal && (
            <div className="flex flex-col items-center justify-center mt-7 text-center ">
              <HiMiniCheckBadge className="text-gray-400 w-[260px] h-[260px] max-[1200px]:h-[200px] max-[1200px]:w-[200px]" />
              <div className="bg-[hsla(210,8%,74%,1)] w-[780px] max-sm:w-[340px] max-lg:w-[600px] h-[90px] max-lg:h-[80px] flex items-center justify-center text-[50px] max-sm:text-[26px] max-lg:text-[40px] rounded-3xl">
                <h1>Your order has been made</h1>
              </div>
              <p className="text-white text-[26px] max-lg:text-[22px] mt-4 max-sm:text-[18px]">
                Thank you for your payment <br /> An automated payment receipt
                will be sent to your registered email
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
