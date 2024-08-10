import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  deleteBasket,
  desCrement,
  inCrement,
} from "../../redux/createBasketSlice";

const BasketCarts = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full p-4 border-b border-gray-300 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex flex-col px-14 max-lg:px-10 max-lg:ml-[-20px]">
          <img src={el.url} alt="img" className="w-24 h-24 max-lg:w-28 max-lg:h-28 object-cover " />
          <h1 className="text-[10px] font-semibold text-gray-800 text-center">
            {el.title}
          </h1>
        </div>
      </div>
      <div className="flex items-center px-8">
        <h1
          onClick={() => dispatch(desCrement(el._id))}
          className="w-[30px] max-lg:w-[18px] h-[50px] cursor-pointer bg-[hsla(210,19%,25%,1)] text-white flex items-center justify-center text-[18px]">
          -
        </h1>
        <span className="text-white text-sm bg-gray-500 w-[40px] max-lg:w-[30px] h-[50px] flex items-center justify-center text-[18px]">
          {el.quantity}
        </span>
        <h1
          onClick={() => dispatch(inCrement(el._id))}
          className="w-[30px] max-lg:w-[18px] h-[50px] cursor-pointer bg-[hsla(210,19%,25%,1)] text-white flex items-center justify-center text-[18px]">
          +
        </h1>
      </div>
        <span className="text-lg font-semibold text-gray-800 max-lg:ml-5">
          ${el.price}.00
        </span>
      <div onClick={() => dispatch(deleteBasket(el._id))} className="px-24 max-lg:pr-[50px]">
        <a className="text-[23px]">
          <RiDeleteBin6Line />
        </a>
      </div>
    </div>
  );
};

export default BasketCarts;
