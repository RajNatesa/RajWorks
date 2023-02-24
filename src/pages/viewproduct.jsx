import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { fontWeight, width } from "@mui/system";
import { listContext } from "./WomenContex";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function ViewProduct() {
  const { id } = useParams();
  const [ids, setIds] = useState([]);
  const childCont = useContext(listContext);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    console.log("after map productList", childCont.content);
    output();
  }, [childCont.content]);

  function CircularIndeterminate() {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  const output = async () => {
    if (childCont.content?.length > 0 && id) {
      let cont = childCont.content?.filter((ct) => {
        return ct.id === +id;
      });
      setIds(...cont);
      console.log("cont", cont);
    } else {
      setLoader(true);
      const idOutput = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setIds(idOutput.data);
      setLoader(false);
    }
  };

  return (
    <>
      {loader ? (
        <CircularIndeterminate />
      ) : (
        <div>
          <h2 style={{ fontWeight: "bold" }}>{ids.title}</h2>
          {
            <img
              src={ids.image}
              alt="prodimages"
              style={{ height: "auto", width: "250px" }}
            />
          }
          {/* <AddShoppingCartIcon onClick={handleClick} /> */}
          <button
            onClick={() => {
              childCont.updateCount(
                "minus",
                ids,
                childCont.content,
                childCont.setList
              );
            }}
          >
            -
          </button>
          Cart qty:{ids.cart}
          {/* <AddShoppingCartIcon onClick={() => handleClick(ids)} /> */}
          <button
            onClick={() => {
              childCont.updateCount(
                "add",
                ids,
                childCont.content,
                childCont.setList
              );
            }}
          >
            +
          </button>
        </div>
      )}
    </>
  );
}
