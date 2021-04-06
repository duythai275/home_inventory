const INTIAL_STATE = {
    items: [],
    sequenceId: 1
}

const itemsReducer = ( state = INTIAL_STATE, action ) => {
    switch ( action.type ) {
        case "ADD_ITEM":
            return {
                items: state.items.concat( action.payload ),
                sequenceId: ( state.sequenceId + 1 )
            };
        case "DELETE_ITEM":
            return {
                ...state,
                items: state.items.filter( item => item.id !== action.payload.id )
            };
        default:
            return state;
    }
}

export default itemsReducer;