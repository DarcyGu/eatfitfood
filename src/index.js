import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
// import './ribbon.css';
import './index.css';
import App from "./components/App";
import rootReducer from "./reducers";
// import {addToCart} from "./actions";
import {composeWithDevTools} from "redux-devtools-extension";
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer,composeWithDevTools());
console.log(store.getState());
// const unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// store.dispatch(addToCart('001', "regular"));
// store.dispatch(addToCart('002', "regular"));
// store.dispatch(addToCart('003', "large"));

// unsubscribe();
const loadState = () => {
    try {
        const serializedState = localStorage.getItem("checkout-form");
        if(serializedState===null){
            return undefined;
        }
        return JSON.parse(serializedState).save;
    }catch(err){
        return undefined;
    }
}
window.onunload = () => {
    const state = store.getState();
    try {
        localStorage.setItem('cart', JSON.stringify(state.cart));
        localStorage.setItem("discount", JSON.stringify(state.discount));
    }catch(err){
        console.err(err);
    }
    if(!loadState()){
        localStorage.removeItem("checkout-form");
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
