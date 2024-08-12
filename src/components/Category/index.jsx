import React from "react";
import { GoTriangleRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import CategoryProduct from "../CategoryProduct";
import { sorPrice } from "../../redux/createProductSlice";

const Category = () => {
  const nav = useNavigate();
  const { price } = useSelector((s) => s.pro);
  console.log(price, "price");

  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="container">
        <div className="">
          <div className="fixed">
            <div className="flex items-start justify-start flex-col gap-10  pl-14 max-lg:pl-10 py-14 max-[1200px]:pb-40 bg-[hsla(208,14%,49%,1)] w-[400px] max-lg:w-[250px] h-[600px] overflow-y-scroll">
              <h1 className="text-white font-bold text-[30px]">CATEGORY</h1>
              <div className="flex items-start flex-col gap-3">
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/categoryProduct/male`)}>
                    MALE PERFUMES
                  </span>
                </h1>
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/categoryProduct/female`)}>
                    FEMALE PERFUMES
                  </span>
                </h1>
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/categoryProduct/unisex`)}>
                    UNISEX
                  </span>
                </h1>
              </div>
              <div className="">
                <h1 className="text-white font-bold text-[30px]">PRICE</h1>
                <input
                  onChange={(e) => dispatch(sorPrice(e.target.value))}
                  value={price}
                  type="range"
                  id="volume"
                  name="volume"
                  min="0"
                  max="100"
                  className="w-[200px]"
                />
                <h1 className="text-white text-[17px]">Price: {price} - 100%</h1>
              </div>
              <h1 className="text-white font-bold text-[30px]">BRAND</h1>
              <div className="flex items-start flex-col gap-3">
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/Brend/dior`)}>DIOR</span>
                </h1>
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/Brend/vercase`)}>VERSACE</span>
                </h1>
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/Brend/prada`)}>PRADA</span>
                </h1>
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/Brend/ford`)}>TOM FORD</span>
                </h1>
              </div>
              <h1 className="text-white font-bold text-[30px] ">TYPE</h1>
              <div className="flex items-start flex-col gap-3">
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/type/elixir`)}>ELIXIR</span>
                </h1>
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/type/cologone`)}>COLOGNE</span>
                </h1>
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/type/perfume`)}>PERFUME</span>
                </h1>
                <h1 className="text-white text-[20px] max-lg:text-[15px] font-semibold flex items-center gap-3 ">
                  <GoTriangleRight />
                  <span onClick={() => nav(`/type/eau`)}>EAU DE TOILETTE</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
