const INTIAL_STATE = {
    users: [{
        username: "admin",
        password: "password",
        email: "email",
        firstname: "admin",
        lastname: "admin"
    }],
    auth: {
        currentLoggedInUser: null
    }
}

const usersReducer = ( state = INTIAL_STATE, action ) => {
    switch ( action.type ) {
        case "ADD_USER":
            return {
                ...state,
                users: state.users.concat( action.payload )
            }
        case "EDIT_USER":
            return {
                ...state,
                users: state.users.map( user => 
                    ( user.username === action.payload.username ) ?
                    action.payload : user
                )
            }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter( user => user.username !== action.payload.username )
            }
        case "LOG_IN":
            return {
                ...state,
                auth: {
                    currentLoggedInUser: ( state.users.filter( user => ( user.username === action.payload.username 
                        && user.password === action.payload.password ) ).length > 0 ) ? 
                        action.payload.username : null
                }
            }
        case "LOG_OUT":
            return {
                ...state,
                auth: {
                    currentLoggedInUser: null
                }
            }
        default:
            return state;
    }
}

export default usersReducer;