import actionsType from './actionsType';

const globalState = {
    totalOrder: 0,
    stok: 10
}
const rootReducer = (state = globalState, action) => {
    if(action.type === actionsType.PLUS_ORDER){
        if(state.totalOrder < state.stok) {
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        } else {
            alert('Stok Barang adalah Max '+ state.stok)
        }
    }

    if(action.type === actionsType.MINUS_ORDER){
        if(state.totalOrder > 0) {
            return {
                ...state,
                totalOrder: state.totalOrder - 1
            }
        }
    }
    return state;
}

export default rootReducer;