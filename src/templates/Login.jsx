import React from "react";
import {useDispatch} from "react-redux"
import {push} from "connected-react-router";
import {signInAction} from "../reducks/users/actions";

const Login = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => {
                dispatch(signInAction({uid: "0001", username: "myname"}))
                dispatch(push('/'))
            }}>
                ログインする
            </button>
        </div>
    )
}

export default Login