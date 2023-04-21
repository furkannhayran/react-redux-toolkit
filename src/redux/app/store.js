import { configureStore } from "@reduxjs/toolkit"
import counterReducer  from "./../features/counter/CounterSlice"
import CountrySlice from "../features/country/CountrySlice"

export const store = configureStore({
    reducer: {
        counter : counterReducer,
        country : CountrySlice
    }
})