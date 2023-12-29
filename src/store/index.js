import { createStore, applyMiddleware } from "redux"

import reduxLogger from "redux-logger"
import { thunk } from "redux-thunk"
import reduxPromise from "redux-promise"
import reducer from "./reducer"

let middleWare = [thunk, reduxPromise]
// 根据环境变量决定是否使用redux-logger
if (process.env.NODE_ENV == "development") {
  middleWare.push(reduxLogger)
}
const store = createStore(reducer, applyMiddleware(...middleWare))

export default store
