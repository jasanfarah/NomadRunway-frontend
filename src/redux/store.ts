import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {menuBarReducer} from "./menubar";
import {overviewCardReducer} from "./card";



export const rootReducer = combineReducers({
    // ...other reducers
    menubar: menuBarReducer,
    overviewCard: overviewCardReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;


