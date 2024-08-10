import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../redux/createBasketSlice";
import { useNavigate, useParams } from "react-router-dom";
import Category from "../Category";
import { HiBars3 } from "react-icons/hi2";

const Brend = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { basket } = useSelector((s) => s.bas);
  const { product } = useSelector((s) => s.pro);
  const { title } = useParams();
  const [cat,setCat] = useState(false)


  let filterBrend = product.filter((el) => el.brend === title);

  console.log(filterBrend, "category");

  const someBasket = filterBrend.some((brendItem) =>
    basket.some((basketItem) => basketItem._id === brendItem._id)
  );

  return (
    <div className="container">
      <div className=" relative flex items-start gap-40  max-[1200px]:gap-28 max-lg:gap-34">
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
        <div className="mt-[40px] flex items-start flex-wrap gap-10  max-[1200px]:gap-7  max-lg:ml-48 ml-80 max-[446px]:ml-10">
          {filterBrend?.map((el) => (
            <div
              key={el._id}
              className="bg-[hsla(210,6%,85%,1)] relative w-[400px] h-[400px] max-sm:w-[250px] max-sm:h-[250px] max-[1200px]:w-[270px]  max-[1200px]:h-[270px]  max-lg:w-[210px] max-lg:h-[230px] rounded-lg flex items-center flex-col gap-4 max-[1200px]:gap-2">
              <img
                src={el.url}
                alt={el.title}
                className="w-full h-[250px] max-[1200px]:h-[160px] max-lg:h-[140px]  object-contain"
              />
              <div className="flex items-center justify-center flex-col gap-2  max-[1200px]:gap-1 max-lg:gap-[2px]">
                <h1 className="font-bold text-[20px]  max-[1200px]:text-[16px] max-lg:text-[13px] max-sm:text-[16.5px]">{el.title}</h1>
                <h1 className="text-[20px] font-bold  max-[1200px]:text-[16px] max-lg:text-[13px] max-sm:text-[16.5px]">$ {el.price}</h1>
                <button
                  onClick={() => {
                    someBasket ? nav(`/baskets`) : dispatch(addToBasket(el));
                  }}
                  className="bg-[hsla(208,14%,49%,1)] w-[154px] h-[40px] max-sm:w-[140px] max-[1200px]:h-[35px] max-[1200px]:w-[130px] max-[1200px]:text-[15px] max-lg:w-[100px] max-lg:h-[30px] max-lg:text-[12px]  text-white font-bold rounded-lg">
                  {someBasket ? "Go to Basket" : "Add to Basket"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brend;
