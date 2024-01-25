'use client'

import { Provider } from "react-redux";
import store from "./Store";
import { SessionProvider } from "next-auth/react";

const ReduxProviders = ({children}: {children: React.ReactNode}) => {


    return (
        <SessionProvider>
            <Provider store={store}>
                {children}
            </Provider>
        </SessionProvider>
    )
}

export default ReduxProviders;