import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import createStore from "./reducks/stores/store";
import {ConnectedRouter} from "connected-react-router";
import * as History from "history";
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';


/* react-reduxのProviderは
1. propsにstoreを渡す
　ラップしたコンポーネントにstoreの情報を渡す

2.ラップしたコンポーネント内で
　react-reduxのconnect関数を使えるようにする
　-> ReactとReduxを接続してstoreを変更できるようにする。
 */
const history = History.createBrowserHistory();
export const store = createStore(history);

ReactDOM.render(
    <Provider store={store}>
         <ConnectedRouter history={history}>
             <App />
         </ConnectedRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
