import React, { useState } from "react";
import { FiUser } from "react-icons/fi";
import { PiShoppingCartSimple } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setModall } from "../../redux/createProductSlice";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { IoMdClose } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { useAuth } from "../../context";
import { MdChevronRight } from "react-icons/md";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { modall, user } = useSelector((s) => s.pro);
  const [modal1, setModal1] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error1, setError1] = useState(false);
  const [error, setError] = useState("");

  const [modalIcons, setModalIcons] = useState(false);
  const { registers, sigInGoogle, logOutUser, login } = useAuth();
  const errormessage = (err) => {
    toast.error(err, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };
  async function handleRegister() {
    try {
      await registers(email, password);
      setEmail("");
      setPassword("");
      // navigate(`/`);
      dispatch(setModall(false));
    } catch (err) {
      setError1(true);
      setError(err.message);
    }
  }

  async function handleGoogle() {
    try {
      await sigInGoogle();
      // navigate(`/`);
      dispatch(setModall(false));
    } catch (error) {
      errormessage(error.message);
    }
  }
  async function handleLogin() {
    try {
      await login(email, password);
      setEmail("");
      setPassword("");
      navigate(`/`);
      dispatch(setModall(false));
    } catch (err) {
      setError1(true);
      setError(err.message);
    }
  }
  async function hundleLogout() {
    try {
      await logOutUser();
      navigate(`/`);
      setModal1(false);
    } catch (error) {
      errormessage(error.message);
    }
  }

  return (
    <div className="sticky top-0 z-[50] backdrop-blur-sm">
      <div className="container ">
        <div className="">
          <div className="">
            <div className="p-[26px] max-sm:p-[20px] bg-[hsla(210,8%,74%,1)] relative ">
              <div className="flex items-center justify-between max-xl:justify-between">
                <Link
                  to={`/`}
                  className="text-[38px] max-lg:text-[30px]  font-serif">
                  ENSCENT
                </Link>
                <div className=" items-center gap-16 max-lg:gap-6 hidden sm:flex">
                  <Link to={`/`} className="text-[28px]  max-lg:text-[18px] ">
                    HOME
                  </Link>
                  <Link
                    to={`/products`}
                    className="text-[28px]  max-lg:text-[18px] ">
                    PRODUCTS
                  </Link>
                  <a
                    onClick={() => {
                      if (user) {
                        navigate(`/`);
                      } else {
                        navigate(`*`);
                      }
                    }}
                    className="text-[28px]  max-lg:text-[18px] ">
                    ABOUT
                  </a>
                </div>
                <button className="inline-block sm:hidden ">
                  {modalIcons ? (
                    <a
                      onClick={() => setModalIcons(false)}
                      className="text-[30px]">
                      <IoMdClose />
                    </a>
                  ) : (
                    <a
                      onClick={() => setModalIcons(true)}
                      className="text-[30px]">
                      <HiBars3 />
                    </a>
                  )}
                </button>

                {modalIcons ? (
                  <div className="">
                    <div className="absolute top-20 right-0 bg-white rounded-lg shadow-2xl w-[200px] h-[280px]  px-2 py-3 flex flex-col gap-2">
                      <h1 className="text-center text-[20px] font-semibold">
                        Navigation
                      </h1>
                      <div
                        onClick={() => {
                          navigate(`/`);
                          setModalIcons(false);
                        }}
                        className="flex items-center gap-3 cursor-pointer">
                        <a className="text-[18px]">
                          <MdChevronRight />
                        </a>
                        <h1 className="text-[17px] font-medium">Home</h1>
                      </div>
                      <div
                        onClick={() => {
                          navigate(`/products`);
                          setModalIcons(false);
                        }}
                        className="flex items-center gap-3 cursor-pointer">
                        <a className="text-[18px]">
                          <MdChevronRight />
                        </a>
                        <h1 className="text-[17px] font-medium">PRODUCTS</h1>
                      </div>
                      <div
                        onClick={() => {
                          if (user) {
                            navigate(`/`);
                          } else {
                            navigate(`*`);
                          }
                          setModalIcons(false);
                        }}
                        className="flex items-center gap-3 cursor-pointer">
                        <a className="text-[18px]">
                          <MdChevronRight />
                        </a>
                        <h1 className="text-[17px] font-medium">ABOUT</h1>
                      </div>
                      <hr />
                      <div>
                        {user ? (
                          <div className=" ">
                           <h1
                      className="text-[20px] max-[992px]:text-[18px]"
                      onClick={hundleLogout}>
                      ВЫЙТИ
                    </h1>
                          </div>
                        ) : (
                          <div
                            onClick={() => {
                              dispatch(setModall(true));
                              
                              // setError1(false);
                            }}
                            className="flex items-center gap-1  cursor-pointer  ">
                            <a className="text-[30px] max-sm:text-[25px] ">
                              <FiUser />
                            </a>
                            <h1 className="text-[20px] ">Войти</h1>
                          </div>
                        )}
                      </div>
                      <div
                        onClick={() => {
                          navigate(`/baskets`);
                          setModalIcons(false);
                        }}
                        className="flex items-center gap-3 cursor-pointer ">
                        <a className="text-[20px] hover:text-green-600">
                          <PiShoppingCartSimple />
                        </a>
                        <h1 className="text-[17px] font-medium">Basket</h1>
                      </div>
                      <div onClick={() => {
                      if (user) {
                        navigate(`/create`);
                      } else {
                        navigate(`*`);
                      }
                    }}
                        className="flex items-center gap-3 cursor-pointer">
                        <a   className="text-[18px]  hover:text-green-600">
                          <MdAddShoppingCart />
                        </a>
                        <h1 className="text-[17px] font-medium">
                          Add to product
                        </h1>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className=" items-center gap-16 max-lg:gap-6 hidden sm:flex">
                  <Link to={`/baskets`} className="text-[30px]">
                    <PiShoppingCartSimple />
                  </Link>
                  <a
                    onClick={() => {
                      if (user) {
                        navigate(`/create`);
                      } else {
                        navigate(`*`);
                      }
                    }}
                    className="text-[30px]">
                    <MdAddShoppingCart />
                  </a>

                  {user ? (
                    <div className=" ">
                      <img
                        onClick={() => setModal1(true)}
                        src={user.photoURL ? user.photoURL : null}
                        alt=""
                        className="rounded-[50%] w-[60px] max-[992px]:w-[50px]  h-[60px] max-[992px]:h-[50px]  cursor-pointer"
                      />
                    </div>
                  ) : (
                    <div
                      onClick={() => {
                        dispatch(setModall(true));
                        setError1(false);
                      }}
                      className="flex items-center gap-1  cursor-pointer  ">
                      <a className="text-[30px] max-sm:text-[25px] ">
                        <FiUser />
                      </a>
                      <h1 className="text-[20px] ">Войти</h1>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="bg-[hsla(0,0%,85%,1)] p-[15px] max-lg:p-[10px] max-sm:p-[7px]"></div>
          </div>

          {modall ? (
            <div className="">
              <div className="fixed  top-28 left-[35%] max-[446px]:left-[4%] max-[867px]:top-[120%] max-[992px]:top-[90%] max-lg:top-[90%] max-[1200px]:top-[50%] max-[1200px]:left-[27%] max-lg:left-[25%]   z-10 w-[500px] max-[446px]:w-[360px] max-[867px]:w-[400px] max-lg:w-[480px]  h-[500px] max-[446px]:h-[400px] max-lg:h-[450px] max-[1200px]:h-[480px] bg-white shadow-2xl rounded-md">
                <div className="   flex items-start flex-col gap-12 max-lg:gap-6 max-[1200px]:gap-9 px-[30px] py-[30px] max-[446px]:px-[20px]">
                  <a
                    onClick={() => dispatch(setModall(false))}
                    className="absolute top-[10px] right-[10px] text-black text-[30px]">
                    <IoClose />
                  </a>
                  <h1 className="flex items-center gap-9 text-[26px] max-[867px]:text-[20px] font-bold text-gray-600">
                    Войти <span className="text-black">Зарегистрироваться</span>
                  </h1>
                  <div className="flex items-center flex-col gap-10 max-[867px]:gap-5">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="text"
                      className="border-2 border-solid border-gray-400 px-[10px] w-[430px] max-[867px]:w-[330px] h-[40px]  rounded-md"
                      placeholder="Укажите вашу электронную почту"
                    />
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type="password"
                      className="border-2 border-solid border-gray-400 px-[10px] w-[430px] max-[867px]:w-[330px] h-[40px]  rounded-md"
                      placeholder="Укажите вашу пароль"
                    />
                  </div>
                  <div className="flex items-center flex-col gap-7 max-[446px]:gap-5 max-sm:mx-auto">
                    {" "}
                    <button
                      onClick={handleRegister}
                      className="text-[white] bg-gray-700 w-[430px] max-sm:w-[270px]  max-[678px]:w-[150px] max-[867px]:w-[330px] h-[40px] rounded-xl font-bold text-[18px]">
                      ВОЙТИ
                    </button>
                    <button
                      onClick={handleLogin}
                      className="text-[white] bg-gray-700 w-[430px] max-sm:w-[270px]  max-[678px]:w-[150px] max-[867px]:w-[330px] h-[40px] rounded-xl font-bold text-[20px]">
                      Login
                    </button>
                    <hr className="bg-black w-[90%] text-[20px] mx-auto" />
                    <div className="flex items-center flex-col gap-4">
                      <div
                        onClick={handleGoogle}
                        className="flex items-center gap-3 cursor-pointer">
                        <a className="text-[27px]">
                          <FcGoogle />
                        </a>
                        <h1 className="text-[18px] font-bold text-gray-600">
                          Вход через Google
                        </h1>
                      </div>
                      {error1 ? (
                        <div
                          className="flex items-center p-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
                          role="alert">
                          <svg
                            class="flex-shrink-0 inline w-4 h-4 me-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                          </svg>
                          <span class="sr-only">Info</span>
                          <div>
                            <span class="font-medium">{error}!</span>
                          </div>
                        </div>
                      ) : null}
                    </div>
                    <ToastContainer />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-[100%]  h-[100vh] bg-black bg-opacity-60"></div>
            </div>
          ) : null}
          {modal1 ? (
            <div className="relative">
              <div className="w-[300px]  max-[992px]:w-[260px]  h-[200px] max-[992px]:h-[260px] absolute  z-50  top-0 right-0 flex items-start   flex-col gap-3  bg-white shadow-2xl rounded-md  px-[30px] py-[30px]">
                <a
                  onClick={() => setModal1(false)}
                  className="absolute top-0 right-[10px] text-[30px] text-black">
                  <IoClose />
                </a>
                {user ? (
                  <div className="flex items-center gap-2 text-[20px] cursor-pointer ">
                    <img
                      src={user.photoURL ? user.photoURL : null}
                      alt=""
                      className="rounded-[50%] w-[60px] max-[992px]:w-[40px] h-[60px] max-[992px]:h-[40px]  "
                    />
                    <h1
                      className="text-[20px] max-[992px]:text-[18px]"
                      onClick={hundleLogout}>
                      ВЫЙТИ
                    </h1>
                  </div>
                ) : null}
                {user ? (
                  <h1 className="flex items-center gap-9 text-[14px] max-[992px]:text-[12px] font-bold text-sky-900">
                    {user.email}
                  </h1>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
