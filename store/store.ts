import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

// Reducers
import { authReducer, uxReducer, uiReducer, mailReducer } from "../reducers";

export function makeStore() {
  return configureStore({
    reducer: {
      auth: authReducer,
      ux: uxReducer,
      ui: uiReducer,
      emails: mailReducer,
    },
  });
}

const store = makeStore();

// Types
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
