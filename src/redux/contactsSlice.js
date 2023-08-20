import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
  { id: 52698, name: "George", number: "895-58-74" },
  { id: 75652, name: "Get good at JavaScript", number: "369-85-72" },
  { id: 78269, name: "Master React", number: "456-85-89" },
  { id: 48953, name: "Discover Redux", number: "051-75-98" },
  { id: 14898, name: "Build amazing apps", number: "742-86-32" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
