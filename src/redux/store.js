import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filterSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['contacts'],
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        contacts: contactsReducer,
        filter: filterReducer,
    })
);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);