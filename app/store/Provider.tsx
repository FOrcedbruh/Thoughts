'use client'

import { Provider } from "react-redux";
import store from "./Store";



const ReduxProviders = ({children}: {children: React.ReactNode}) => {


    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProviders;