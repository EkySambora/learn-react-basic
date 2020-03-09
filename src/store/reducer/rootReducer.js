import { PLUS_ORDER, MINUS_ORDER} from './actionsType';

const globalState = {
    totalOrder: 0,
    stok: 10,
    price: 410000
}
const rootReducer = (state = globalState, action) => {
    if(action.type === PLUS_ORDER){
        if(state.totalOrder < state.stok) {
            return {
                ...state,
                totalOrder: state.totalOrder + 1
            }
        } else {
            alert('Stok Barang adalah Max '+ state.stok)
        }
    }

    if(action.type === MINUS_ORDER){
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