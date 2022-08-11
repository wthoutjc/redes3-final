import { createSlice } from "@reduxjs/toolkit";

// Interfaces
import { IMail } from "../interfaces";
import { AppState } from "../store";

interface EmailAction {
  payload: IMail;
}

interface EmailState {
  emails: IMail[];
}

const initialState: EmailState = {
  emails: [],
};

const emailSlice = createSlice({
  name: "[EMAIL]",
  initialState,
  reducers: {
    addEmail: (state: EmailState, action: EmailAction) => {
      state.emails = [...state.emails, action.payload];
    },
  },
});

export { emailSlice };

// Actions
export const { addEmail } = emailSlice.actions;

// Selector to access to the store
export const selectEmails = (state: AppState) => state.emails;

export default emailSlice.reducer;