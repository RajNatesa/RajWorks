
import React from "react";
import ToDo from "./component/todos/ToDo";
import ResponsiveAppBar from "../src/component/navBar/NavBar";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../src/component/ErrorPage";
import SportsWear from "../src/component/sportswear/SportsWear";
import Men from "./pages/men/Men";
import Women from "../src/pages/Women";
import ViewProduct from "../src/pages/viewproduct";
import { useState, useEffect } from "react";
import axios from "axios";
import { listContext } from "./pages/WomenContex";
import Cart from "./pages/cart";
import SignUp from "./component/navBar/SignUp";
import LoginPage from "./component/navBar/LoginPage";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const [list, setList] = useState([]);
  const [loader, setLoader] = useState(false);
  // const [cart, setCart] = useState([]);

  const list = useSelector((store) => {
    return store.custom.list;
  });

  const dispatch = useDispatch();
  const setList = (newList) => {
    dispatch({
      type: "updateList",
      payload: newList,
    });
  };

  const cart = useSelector((store) => {
    return store.custom.cart;
  });
  const setCart = (newCart) => {
    dispatch({
      type: "updateCart",
      payload: newCart,
    });
  };

  useEffect(() => {
    renderedOutput();
    getCart();
  }, []);

  useEffect(() => {
    putCart(cart);
  }, [cart]);

  const renderedOutput = async () => {
    try {
      setLoader(!loader);
      const result = await axios.get("https://fakestoreapi.com/products");
      // setList(result.data);
      setList(
        result.data.map((nl) => {
          return { ...nl, cart: 1 };
        })
      );
      console.log("reduxList", list);
      setLoader(false);
    } catch (e) {}
  };

  const getCart = async () => {
    try {
      const result = await axios.get(
        "https://reacttodo-eb67d-default-rtdb.firebaseio.com/Raj-todo.json"
      );
      console.log("get", result.data);
      setCart(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const putCart = async (cart) => {
    try {
      const result = await axios.put(
        "https://reacttodo-eb67d-default-rtdb.firebaseio.com/Raj-todo.json",
        JSON.stringify(cart)
      );
      console.log("put", result);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCount = (action, product, productContext, settermethod) => {
    if (action === "add" && productContext?.length > 0) {
      let newProdArray = productContext?.map((prod) => {
        if (prod.id === product.id) {
          prod = { ...prod, cart: prod.cart + 1 };
          return prod;
        } else return prod;
      });

      settermethod([...newProdArray]);
    } else if (action === "minus") {
      let newProdArray = productContext?.map((prod) => {
        if (prod.id === product.id && prod.cart > 1) {
          prod = { ...prod, cart: prod.cart - 1 };
          console.log("minus", prod.cart);
          return prod;
        } else return prod;
      });
      settermethod([...newProdArray]);
    }
  };

  const productInCart = (cart, product) =>
    cart?.filter((cc) => {
      return cc.id === product.id;
    });

  const updateCart = (action, product) => {
    if (action === "add" && productInCart(cart, product)?.length > 0) {
      let newCart = cart?.map((cc) => {
        if (cc.id === product.id) {
          cc = { ...cc, cart: cc.cart + product.cart };
          return cc;
        } else return cc;
      });
      console.log("newCart", newCart);
      setCart([...newCart]);
    } else if (action === "remove") {
      setCart(
        cart?.filter((pd) => {
          return pd.id !== product.id;
        })
      );
    } else if (action === "add" && cart?.length > 0) {
      setCart([...cart, product]);
    } else if (action === "add") {
      setCart([product]);
    }
  };

  return (
    <>
      <div className="app">
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<h2>Welcome to Home</h2>}></Route>
          <Route path="/todo" element={<ToDo />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/sportsWear" element={<SportsWear />} />

          <Route
            path="/women"
            element={
              <listContext.Provider
                value={{
                  content: list,
                  loader: loader,
                  setList,
                  updateCount,
                  updateCart,
                  cart,
                  setCart,
                  productInCart,
                }}
              >
                <Women />
              </listContext.Provider>
            }
          />

          <Route
            path="/women/:id"
            element={
              <listContext.Provider
                value={{
                  content: list,
                  loader: loader,
                  setList,
                  updateCount,
                  updateCart,
                }}
              >
                <ViewProduct />
              </listContext.Provider>
            }
          />
          <Route
            path="/cart"
            element={
              <listContext.Provider
                value={{
                  content: list,
                  loader: loader,
                  setList,
                  updateCount,
                  updateCart,
                  cart,
                  setCart,
                }}
              >
                <Cart />
              </listContext.Provider>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
