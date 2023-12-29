import * as TYPES from "../action-types"

const initial = {
  info: null
}

export default function baseReducer(state = initial, action) {
  const newState = { ...state }
  const { type } = action
  switch (type) {
    default:
  }
  return newState
}
