const redux = require('redux');
const creteStore = redux.createStore;

const initialState = {
    value : 0
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_VALUE":
            return {
                ...state,
                value : state.value + 2
            }
    }
    return state;
}


const store = creteStore(rootReducer);

console.log(store.getState())

store.subscribe(() => {
    console.log('store change')
})
store.dispatch({type: 'ADD_VALUE'})

console.log(store.getState())

