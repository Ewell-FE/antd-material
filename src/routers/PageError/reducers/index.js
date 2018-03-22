
const ACTION_HANDLERS = {

}

const initialState = {

}

export function Reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default Reducer