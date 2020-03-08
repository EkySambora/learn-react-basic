import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import IndexPage from './components/container/IndexPage/IndexPage';

const globalState = {
    totalOrder: 0,
    stok: 10
}
const rootReducer = (state = globalState, action) => {
    if(action.type === "PLUS_ORDER"){
        if(state.totalOrder < state.stok) {
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        }else{
            alert('Stok Barang adalah Max '+ state.stok)
        }
    }

    if(action.type === "MINUS_ORDER"){
        if(state.totalOrder > 0) {
            return {
                ...state,
                totalOrder: state.totalOrder - 1
            }
        }
    }
    return state;
}

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store} >
        <IndexPage />
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
