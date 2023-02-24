import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ViewProduct from "./viewproduct";
import { Button, Link as Linkmui } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { listContext } from "../pages/WomenContex";
import { useContext } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { handleBreakpoints } from "@mui/system";

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  );
}

function Women() {
  const childContext = useContext(listContext);
  const [productList, setProductList] = useState(null);

  return (
    <>
      {/* <button onClick={childContext.content}>Click</button> */}
      {childContext && childContext.loader ? (
        <CircularIndeterminate />
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {childContext &&
            childContext.content.map((elem) => {
              return (
                <>
                  <div
                    style={{
                      width: "400px",
                      borderStyle: "solid",
                      borderWidth: "2px",
                    }}
                  >
                    <img src={elem.image} width="200px" height="auto"></img>
                    <br></br>
                    <h2>{elem.title}</h2>
                    <br></br>
                    <Linkmui component={Link} to={`${elem.id}`}>
                      More
                    </Linkmui>
                    <button
                      onClick={() => {
                        childContext.updateCount(
                          "minus",
                          elem,
                          childContext.content,
                          childContext.setList
                        );
                      }}
                    >
                      -
                    </button>
                    {/* <AddShoppingCartIcon onClick={() => handleClick(elem)} /> */}
                    <button
                      onClick={() => {
                        childContext.updateCount(
                          "add",
                          elem,
                          childContext.content,
                          childContext.setList
                        );
                      }}
                    >
                      +
                    </button>
                    Cart qty:{elem.cart}
                    <Button
                      onClick={() => {
                        childContext.updateCart(
                          "add",
                          elem,
                          childContext.cart,
                          childContext.setCart
                        );
                      }}
                      variant="outlined"
                      startIcon={<AddShoppingCartIcon />}
                    >
                      Add cart
                    </Button>
                    {childContext.productInCart(childContext.cart, elem)
                      ?.length > 0 ? (
                      <Button
                        onClick={() => {
                          childContext.updateCart(
                            "remove",
                            elem,
                            childContext.cart,
                            childContext.setCart
                          );
                        }}
                        variant="outlined"
                        startIcon={<AddShoppingCartIcon />}
                      >
                        RemoveFromCart
                      </Button>
                    ) : null}
                  </div>
                </>
              );
            })}
        </div>
      )}
    </>
  );
}
export default Women;
