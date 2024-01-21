import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CreateGoalSlice from "./reducers/CreateGoalSlice";
import CompleteGoalSlice from "./reducers/CompleteGoalSlice";


const rootReducer = combineReducers({
    CreateGoalSlice: CreateGoalSlice,
    CompleteGoalSlice: CompleteGoalSlice
});



const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

export type AppDispatch = typeof store.dispatch;
export type RootType = ReturnType<typeof store.getState>
export default store;
