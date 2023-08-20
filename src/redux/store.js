import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    {
        contacts: contactsReducer,
        filter: filterReducer,
    });

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);









 

 
