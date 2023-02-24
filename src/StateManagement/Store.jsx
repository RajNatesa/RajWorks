import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./Reducer";

const Store = configureStore({
  reducer: { custom: customReducer },
});

export default Store;
