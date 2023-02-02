import { combineReducers } from "@reduxjs/toolkit";
import salesReducer from "./slices/sales";

const rootReducer = combineReducers({
  sales: salesReducer,
});

export { rootReducer };
