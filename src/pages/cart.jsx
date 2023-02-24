import React from "react";
import { useContext, useState, useEffect } from "react";
import { listContext } from "./WomenContex";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Button } from "@mui/material";
import { RemoveShoppingCart } from "@mui/icons-material";
// import { Directions } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const cartContext = useContext(listContext);

  const cart = useSelector((store) => {
    return store.custom.cart;
  });
  const dispatch = useDispatch();

  const setCart = (newCart) => {
    dispatch({
      type: "updateCart",
      payload: newCart,
    });
  };

  useEffect(() => {
    console.log(cartContext.cart);
  }, [cartContext.cart]);
  return (
    <>
      {cart && cart.length > 0 ? (
        cart.map((elem) => {
          return (
            <div>
              <h2 style={{ fontWeight: "bold" }}>{elem.title}</h2>
              <img
                src={elem.image}
                alt="prodimages"
                style={{ height: "auto", width: "250px" }}
              />
              <button
                onClick={() => {
                  cartContext.updateCount("minus", elem, cart, setCart);
                }}
              >
                -
              </button>
              Cart qty:{elem.cart}
              <button
                onClick={() => {
                  cartContext.updateCount(
                    "add",
                    elem,
                    cartContext.cart,
                    cartContext.setCart
                  );
                }}
              >
                +
              </button>
              <Button
                onClick={() => {
                  cartContext.updateCart(
                    "remove",
                    elem,
                    cartContext.content,
                    cartContext.setList
                  );
                }}
                variant="outlined"
                startIcon={<RemoveShoppingCart />}
              >
                Remove cart
              </Button>
            </div>
          );
        })
      ) : (
        <h2>Cart is Empty</h2>
      )}
    </>
  );
}
