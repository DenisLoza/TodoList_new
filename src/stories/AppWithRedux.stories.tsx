import React from "react"
import AppWithRedux from "../app/AppWithRedux"
import {ReduxStoreProviderDecorator} from "../app/ReduxStoreProviderDecorator"

export default {
    title: "AppWithRedux Component",
    component: AppWithRedux,
    decorators: [ReduxStoreProviderDecorator]
}

export const AppWithReduxBaseExample = () => {
    return <AppWithRedux demo={true}/>
}
