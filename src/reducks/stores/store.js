import {
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import {UsersReducer} from "../users/reducers";
import {connectRouter, routerMiddleware} from "connected-react-router";

export default function createStore(history){
    return reduxCreateStore(
        combineReducers(
            {
                router: connectRouter(history),
                users: UsersReducer
            } ,// このObjectがstateのデータ構造そのものに相当する。
            applyMiddleware(
                routerMiddleware(history)
            )
        )
    )
}