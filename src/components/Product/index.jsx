import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/createProductSlice";
import ProductCarts from "../ProductCarsts";
import Category from "../Category";
import { HiBars3 } from "react-icons/hi2";

const Product = () => {
  const { product,price } = useSelector((s) => s.pro);
  const [cat,setCat] = useState(false)
  const dispatch = useDispatch();
  const getIpProduct = () => async (dispatch) => {
    const { data } = await axios.get(
      `https://api.elchocrud.pro/api/v1/ce661c48b0ea052e6f9b2f8cd6eef69a/Perfumee`
    );
    dispatch(getProduct(data));
    console.log(data, "data");
  };
  useEffect(() => {
    dispatch(getIpProduct());
  }, [dispatch]);
  return (
    <div>
      <div className="container">
        <div className="flex items-start gap-40 max-[1200px]:gap-24 max-lg:gap-34 relative">
          <div className="max-[446px]:hidden">
            <Category />
          </div>
        <div className="absolute">
        <a onClick={() => setCat(!cat)} className="text-white absolute top-2 text-[20px] min-[446px]:hidden ">
            <HiBars3 />
          </a>
          {
            cat ? <div  className="absolute top-10 z-[52]">
               <Category /> 
            </div>: null
          }
        </div>
          <div className="flex items-start flex-wrap  gap-10 max-[1200px]:gap-7 ml-80 max-lg:ml-48 max-[446px]:ml-10">
            {product?.filter((item) => +item.price >= price).map((el) => (
              <ProductCarts el={el} key={el._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
