import * as ACTIONS from '../actions'
const ACTION_HANDLERS = {
    [ACTIONS.AUTHORITY_MENULIST_LOGINNAME_SUCCESS]: (state, action) => (
        Object.assign({}, state, {
            components: action.components,
            fetching: false
        })
    )

}

const initialState = {
    fetching: true,
    components: {}
}
export function Reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default Reducer