import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export { store };

export type IRootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
