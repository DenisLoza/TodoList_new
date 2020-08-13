import {applyMiddleware, combineReducers, createStore} from "redux"
import {todolistsReducer} from "../features/TodolistsList/Todolists/todolistsReducer"
import {tasksReducer} from "../features/TodolistsList/Todolists/tasksReducer"
import thunk from "redux-thunk"
import {appReducer} from "./appReducer"

// type appRootStateType = {
//     todolists: Array<todoListType>
//     tasks: tasksStateType
// }
// автоматическая типизация. Возьми тип у rootReduser
export type appRootStateType = ReturnType<typeof rootReducer>

// создаем общий редьюсер
export const rootReducer = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer,
    app: appReducer
})
// создаем стор и передаем туда общий редьюсер и промежуточный слой для работы с thunk ф-циями
// applyMiddleware - это преобразователь thunk ф-ций в объекты
export const store = createStore(rootReducer, applyMiddleware(thunk))


// @ts-ignore
window.store = store
