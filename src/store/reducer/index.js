import { combineReducers } from "redux"

import baseReducer from "./base.reducer"
import storeReducer from "./store.reducer"

const reducer = combineReducers({
  base: baseReducer,
  store: storeReducer
})

export default reducer
