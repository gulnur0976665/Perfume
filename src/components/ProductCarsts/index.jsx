import axios from "axios";
import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { productDelete } from "../../redux/createProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/createBasketSlice";
import { useNavigate } from "react-router-dom";

const ProductCarts = ({ el }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((s) => s.bas);
  const navigate = useNavigate();
  const deleteProduct = async () => {
    const { data } = await axios.delete(
      `https://api.elchocrud.pro/api/v1/ce661c48b0ea052e6f9b2f8cd6eef69a/Perfumee/${el._id}`
    );
    dispatch(productDelete(data));
  };
  const someBasket = basket.some((item) => item._id == el._id);
  return (
    <div>
      <div className="container">
        <div className="mt-[40px]  ">
          <div className="bg-[hsla(210,6%,85%,1)] relative w-[400px] h-[400px] max-sm:w-[250px] max-sm:h-[250px] max-lg:w-[210px] max-lg:h-[230px]  max-[1200px]:w-[270px]  max-[1200px]:h-[270px] rounded-lg flex items-center flex-col gap-4 max-[1200px]:gap-2">
            <a
              onClick={deleteProduct}
              className="absolute top-[10px] right-[10px] text-[20px] cursor-pointer">
              <IoMdCloseCircleOutline />
            </a>
            <img
              src={el.url}
              alt=""
              className="w-full h-[250px] max-[1200px]:h-[160px] max-lg:h-[140px] object-contain"
            />
            <div className="flex items-center justify-center flex-col gap-2 max-[1200px]:gap-1 max-lg:gap-[2px]">
              <h1 className="font-bold text-[20px] max-[1200px]:text-[16px] max-lg:text-[13px] max-sm:text-[16.5px]">
                {el.title}
              </h1>
              <h1 className="text-[20px] font-bold max-[1200px]:text-[16px] max-lg:text-[13px] max-sm:text-[16.5px]">
                $ {el.price}
              </h1>
              <button
                onClick={() => {
                  someBasket ? navigate(`/baskets`) : dispatch(addToBasket(el));
                }}
                className="bg-[hsla(208,14%,49%,1)] w-[154px] max-[1200px]:w-[130px] max-sm:w-[140px] h-[40px] max-[1200px]:h-[35px] max-lg:w-[100px] max-lg:h-[30px] max-lg:text-[12px] text-white max-[1200px]:text-[15px] font-bold rounded-lg">
                {someBasket ? "Go to Basket" : "Add to Basket"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCarts;
