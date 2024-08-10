import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateProduct from "./components/CreatePriduct";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Basket from "./components/Basket";
import Favorite from "./components/Favorite";
import Footer from "./components/Footer";
import Category from "./components/Category";
import Checkout from "./components/Checkout";
import CategoryProduct from "./components/CategoryProduct";
import Brend from "./components/Brend";
import Type from "./components/Type";
import ErrorPages from "./components/Error";

function App() {
  const route = [
    {
      id: 1,
      link: `/`,
      element: <Home />,
    }, 
    {
      id: 2,
      link: `/create`,
      element: <CreateProduct />,
    },
     {
      id: 3,
      link: `/products`,
      element: <Product />,
    },
     {
      id: 4,
      link: `/baskets`,
      element: <Basket />,
    },
     {
      id: 5,
      link: `/favorite`,
      element: <Favorite />,
    },
     {
      id: 6,
      link: `category/:title`,
      element: <Category />,
    },
     {
      id: 7,
      link: `/footer`,
      element: <Footer />,
    },  
    {
      id: 8,
      link: `/checkout`,
      element: <Checkout />,
    },
      {
      id: 9,
      link: `/categoryProduct/:title`,
      element: <CategoryProduct />,
    },
     {
      id: 9,
      link: `/Brend/:title`,
      element: <Brend />,
    }, {
      id: 9,
      link: `/type/:title`,
      element: <Type />,
    }, 
    {
      id: 10,
      link: `*`,
      element: <ErrorPages />,
    },
  ];

  return (
    <div className="">
      <Header />
      <Routes>
        {route.map((el) => (
          <Route path={el.link} element={el.element} key={el.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
