import { combineReducers, createStore} from "redux"
import ProductsReducer from "./ProductsReducer";

let reducers = combineReducers({
 ProductsData : ProductsReducer
})

type Treducers = typeof reducers

export type GlobalState = ReturnType<Treducers>

const store = createStore(reducers)

//@ts-ignore
window.store = store
export default store
