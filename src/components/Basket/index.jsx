import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCarts from "../BasketCarts";
import { useNavigate } from "react-router-dom";
import { setModall } from "../../redux/createProductSlice";
import {
  deleteBasket,
  desCrement,
  inCrement,
} from "../../redux/createBasketSlice";

const Basket = () => {
  const { basket } = useSelector((state) => state.bas);
  console.log(basket, "basket");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { modall, user } = useSelector((s) => s.pro);

  return (
    <div>
      <div className="container">
        {basket.length ? (
          <div className="">
            <div className="flex items-center justify-center flex-col max-sm:hidden">
              <div className="flex items-center justify-around mt-[30px] w-[80%] h-[80px] bg-[hsla(210,19%,25%,1)]">
                <h1 className="text-white text-[30px] max-lg:text-[20px] font-semibold">
                  PRODUCT
                </h1>
                <h1 className="text-white text-[30px] max-lg:text-[20px] font-semibold">
                  QUANTITY
                </h1>
                <h1 className="text-white text-[30px] max-lg:text-[20px] font-semibold">
                  PRICE
                </h1>
                <h1 className="text-white text-[30px] max-lg:text-[20px] font-semibold">
                  DELETE
                </h1>
              </div>
              <div className="w-[80%] overflow-x-auto shadow-2xl bg-white flex items-start flex-col ">
                {basket.map((el) => (
                  <BasketCarts el={el} key={el._id} />
                ))}
              </div>
              <div className="flex items-center pt-8 gap-[37pc] max-[1200px]:gap-[19pc] max-lg:gap-[16pc]">
                <button
                  onClick={() => navigate(`/products`)}
                  className="bg-[hsla(210,8%,74%,1)] w-[257px] max-lg:w-[160px] h-[56px] max-lg:h-[40px] text-[20px] max-lg:text-[14px] font-semibold">
                  CONTINUE SHOPING
                </button>
                <button
                  onClick={() => {
                    if (user) {
                      navigate(`/checkout`);
                    } else {
                      dispatch(setModall(true));
                    }
                  }}
                  className="bg-[hsla(210,8%,74%,1)] w-[257px] max-lg:w-[190px] h-[56px] max-lg:h-[40px] text-[18px] max-lg:text-[14px] font-semibold ">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>

            <div className="flex items-center my-10 gap-10 sm:hidden">
              <button
                className="bg-[hsla(210,8%,74%,1)] w-[227px] h-[40px] rounded-md text-white font-semibold max-sm:text-[12px] "
                onClick={() => navigate(`/products`)}>
                CONTINUE SHOPING
              </button>
              <button
                className="bg-[hsla(210,8%,74%,1)] w-[227px] h-[40px] rounded-md text-white font-semibold max-sm:text-[12px]"
                onClick={() => {
                  if (user) {
                    navigate(`/checkout`);
                  } else {
                    dispatch(setModall(true));
                  }
                }}>
                {" "}
                PROCEED TO CHECKOUT
              </button>
            </div>
            <div className="sm:hidden  flex items-start justify-center flex-wrap gap-10 my-10">
              {basket.map((el) => (
                <div className="w-[267px] h-[330px] bg-[hsla(210,6%,85%,1)] rounded-lg flex items-start flex-col gap-2">
                  <img
                    src={el.url}
                    alt=""
                    className="w-full h-[200px] object-contain"
                  />
                  <div className="px-3 flex items-start flex-col gap-5">
                    <div className=" flex items-start gap-8">
                      <h1 className="font-bold">{el.title}</h1>
                      <div className="flex items-center ">
                        <h1
                          onClick={() => dispatch(desCrement(el._id))}
                          className="w-[20px]   h-[23px] cursor-pointer bg-[hsla(210,19%,25%,1)] text-white flex items-center justify-center text-[18px]">
                          -
                        </h1>
                        <span className="text-white text-sm bg-gray-500 w-[40px]  h-[23px] flex items-center justify-center text-[18px]">
                          {el.quantity}
                        </span>
                        <h1
                          onClick={() => dispatch(inCrement(el._id))}
                          className="w-[20px]   h-[23px] cursor-pointer bg-[hsla(210,19%,25%,1)] text-white flex items-center justify-center text-[18px]">
                          +
                        </h1>
                      </div>
                    </div>
                    <div className="flex items-center gap-28">
                      <h1>$ {el.price}</h1>
                      <button
                        onClick={() => dispatch(deleteBasket(el._id))}
                        className="px-4 text-white font-semibold bg-red-600 rounded-md">
                        delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Basket;
