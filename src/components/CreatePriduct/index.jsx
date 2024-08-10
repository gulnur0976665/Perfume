import axios from "axios";
import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";

const CreateProduct = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productCat, setProductCat] = useState("");
  const [productType, setProductType] = useState("");
  const [productBrend, setProductBrend] = useState("");
  const [modal, setModal] = useState(false);

  //////////////////////////////////////////////////////////
  const createProduct = () => {
    let newProduct = {
      url: productUrl,
      title: productName,
      price: productPrice,
      category: productCat,
      type: productType,
      brend: productBrend,
      productQuantity: productQuantity,
      quantity: 1,
    };
    axios.post(
      `https://api.elchocrud.pro/api/v1/ce661c48b0ea052e6f9b2f8cd6eef69a/Perfumee
`,
      newProduct
    );
    setProductUrl("");
    setProductName("");
    setProductPrice("");
    setProductCat("");
    setProductType("");
    setProductDes("");
    setProductQuantity("");
    setProductBrend("");
    setModal(false);
  };
  ////////////////////////////////////////////////////////////

  const openModal = () => {
    if (
      productName === "" ||
      productPrice === "" ||
      productDes === "" ||
      productQuantity === "" ||
      productCat === "" ||
      productType === "" ||
      productBrend === ""
      // productUrl === ""
    ) {
      alert("Заполните пустые ячейки!");
    } else {
      setModal(true);
    }
  };
  return (
    <div className="my-[60px]">
      <div className="container">
        <div className="flex  flex-col  gap-10">
       <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center w-[80%] h-[60px] bg-[hsla(208,14%,49%,1)]">
              <h1 className="text-white text-[30px] max-[446px]:text-[20px] font-bold">
                PRODUCT INFORMATION
              </h1>
            </div>
            <div className="bg-[hsla(0,0%,85%,1)] w-[80%] h-[300px] max-lg:h-[580px] flex items-start flex-col gap-5 max-[1200px]:gap-7 pt-10 ">
              <div className="flex items-center max-sm:flex-col max-sm:items-start max-lg:mx-auto gap-10 max-[1200px]:gap-3 pl-10 max-[1200px]:pl-2">
                <select
                  className="bg-gray-600 text-white py-2 max-sm:px-10  max-[446px]:px-2 max-[446px]:ml-2 max-[1200px]:py-1 max-[1200px]:text-[15px] max-lg:text-[18px]  text-center"
                  onChange={(e) => setProductCat(e.target.value)}
                  value={productCat}>
                  <option value="">CATEGORY</option>
                  <option value="male">MALE PERFUMES</option>
                  <option value="female">FEMALE PERFUMES</option>
                  <option value="unisex">UNISEX</option>
                </select>
                <select
                  className="bg-gray-600 text-white py-2 max-sm:px-20 max-[446px]:px-14 max-[1200px]:py-1 max-[1200px]:text-[15px] max-lg:text-[18px] text-center"
                  onChange={(e) => setProductBrend(e.target.value)}
                  value={productBrend}>
                  <option value="">BRAND</option>
                  <option value="dior">DIOR</option>
                  <option value="vercase">VERSACE</option>
                  <option value="prada">PRADA</option>
                  <option value="ford">TOM FORD</option>
                </select>
                <select
                  className="bg-gray-600 text-white py-2 max-sm:px-12 max-[446px]:px-4  max-[1200px]:py-1 max-[1200px]:text-[15px] max-lg:text-[18px] text-center"
                  onChange={(e) => setProductType(e.target.value)}
                  value={productType}>
                  <option value="">TYPE</option>
                  <option value="elixir">ELIXIR</option>
                  <option value="perfume">PERFUME</option>
                  <option value="eau">EAU DE TOILETTE</option>
                  <option value="cologne">COLOGNE</option>
                </select>
              </div>
              <div className=" flex gap-40 max-lg:flex-col max-lg:items-center max-lg:mx-auto max-[1200px]:gap-24 max-sm:gap-20">
                <div className="flex items-start gap-10 ">
                  <div className="flex items-start flex-col gap-6 max-sm:gap-3  max-[446px]:hidden pl-10">
                    <h1 className="font-semibold max-[1200px]:text-[12px] max-lg:text-[18px] max-sm:text-[17px]">PRODUCT NAME:</h1>
                    <h1 className="font-semibold max-[1200px]:text-[12px] max-lg:text-[18px] max-sm:text-[17px]">PRODTUCT PRICE:</h1>
                    <h1 className="font-semibold max-[1200px]:text-[12px] max-lg:text-[18px] max-sm:text-[17px]">PRODUCT DESCRIPTION:</h1>
                    <h1 className="font-semibold max-[1200px]:text-[12px] max-lg:text-[18px] max-sm:text-[17px]">NO.OF BATCHES AVAILABLE:</h1>
                  </div>
                  <div className="flex items-start flex-col gap-6 max-sm:pr-3">
                    <input
                      onChange={(e) => setProductName(e.target.value)}
                      value={productName}
                      type="text"
                      className="w-[243px] h-[25px] max-[1200px]:w-[200px] border-2 border-black bg-transparent"
                    />
                    <input
                      onChange={(e) => setProductPrice(e.target.value)}
                      value={productPrice}
                      type="text"
                      className="w-[243px] h-[25px] max-[1200px]:w-[200px] border-2 border-black bg-transparent"
                    />
                    <input
                      onChange={(e) => setProductDes(e.target.value)}
                      value={productDes}
                      type="text"
                      className="w-[243px] h-[25px] max-[1200px]:w-[200px] border-2 border-black bg-transparent"
                    />
                    <input
                      onChange={(e) => setProductQuantity(e.target.value)}
                      value={productQuantity}
                      type="text"
                      className="w-[243px] h-[25px] max-[1200px]:w-[200px] border-2 border-black bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-start  max-[446px]:ml-5 max-lg:items-center flex-col gap-5 max-sm:gap-2 max-[1200px]:gap-10 mt-[-50px] max-[1200px]:mr-10">
                  <h1 className="font-semibold max-lg:text-[20px] max-[446px]:text-[18.7px] max-lg:text-gray-600">UPLOAD PRODUCT IMAGE:</h1>
                  <input
                    onChange={(e) => setProductUrl(e.target.value)}
                    value={productUrl}
                    type="text"
                    placeholder="Product Url"
                    className="bg-transparent border-2 border-black w-[284px] h-[56px] max-[446px]:w-[250px] text-[20px] text-black px-3 placeholder:text-black rounded-3xl"
                  />

                  <button
                    onClick={openModal}
                    className="w-[284px] h-[56px] max-[446px]:w-[250px]  bg-[hsla(210,8%,74%,1)] font-bold text-[20px] text-white rounded-3xl">
                    PREVIEW PRODUCT
                  </button>
                </div>
              </div>
          </div>
       </div>
          {modal ? (
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center w-[80%] h-[60px] bg-[hsla(208,14%,49%,1)]">
                <h1 className="text-white text-[30px] max-[446px]:text-[20px]  font-bold">
                  PRODUCT PREVIEW
                </h1>
              </div>
              <div className="bg-[hsla(0,0%,85%,1)] w-[80%] h-[400px] max-lg:h-[800px] flex items-start flex-col gap-5 pt-10 ">
                <div className=" flex gap-40 max-lg:flex-col max-[1200px]:gap-20">
                  <div className="flex items-start  gap-10 max-[1200px]:gap-10">
                    <div className="flex items-start flex-col gap-4 max-lg:gap-4 max-[1200px]:gap-2.5 max-[446px]:hidden  max-sm:gap-2 pl-10">
                      <h1 className="font-semibold max-[1200px]:text-[13px] max-sm:text-[12.4px]">PRODUCT NAME:</h1>
                      <h1 className="font-semibold max-[1200px]:text-[13px] max-sm:text-[12.4px]">PRODTUCT PRICE:</h1>
                      <h1 className="font-semibold max-[1200px]:text-[13px] max-sm:text-[12.4px]">PRODUCT DESCRIPTION:</h1>
                      <h1 className="font-semibold max-[1200px]:text-[13px] max-sm:text-[12.4px] pt-20">PRODUCT CATEGORY:</h1>
                      <h1 className="font-semibold max-[1200px]:text-[13px] max-sm:text-[12.4px]">PRODUCT BRAND:</h1>
                      <h1 className="font-semibold max-[1200px]:text-[13px] max-sm:text-[12.4px]">PRODUCT TYPE:</h1>
                      <h1 className="font-semibold max-[1200px]:text-[13px] max-sm:text-[12.4px]">
                        NO.OF BATCHES AVAILABLE:
                      </h1>
                    </div>
                    <div className="flex items-start flex-col max-[446px]:ml-6 gap-3 max-sm:pr-3">
                      <h1 className="w-[250px] h-[26px] border-2 border-black">
                        {productName}
                      </h1>
                      <h1 className="w-[250px] h-[26px] border-2 border-black">
                        {productPrice}
                      </h1>
                      <div className="w-[250px] h-[112px] max-[1200px]:h-[90px] border-2 border-black">
                        <h1 className="w-[240px]">{productDes}</h1>
                      </div>
                      <h1 className="w-[250px] h-[26px] border-2 border-black">
                        {productCat}
                      </h1>
                      <h1 className="w-[250px] h-[26px] border-2 border-black">
                        {productBrend}
                      </h1>
                      <h1 className="w-[250px] h-[26px] border-2 border-black">
                        {productType}
                      </h1>
                      <h1 className="w-[250px] h-[26px] border-2 border-black">
                        {productQuantity}
                      </h1>
                    </div>
                  </div>
                  <div className="flex items-center flex-col gap-5 max-[1200px]:mr-3">
                    <h1 className="font-semibold">UPLOAD PRODUCT IMAGE:</h1>
                    <img src={productUrl} alt="" className="w-[160px]" />
                    <button
                      onClick={createProduct}
                      className="w-[284px] max-[1200px]:w-[240px] h-[56px] bg-[hsla(210,8%,74%,1)] font-bold text-[20px] text-white rounded-3xl">
                      POST PRODUCT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
