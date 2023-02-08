import { combineReducers } from "@reduxjs/toolkit";
import salesReducer from "./slices/sales";
import openaiReducer from "./slices/openai";

const rootReducer = combineReducers({
  sales: salesReducer,
  openai: openaiReducer
});

export { rootReducer };
