const INITIAL_STATE = {
    categories: [{
        id: 1,
        name: "kitchen"
    }, {
        id: 2,
        name: "bath room"
    }, {
        id: 3,
        name: "living room"
    }, {
        id: 4,
        name: "bed room"
    }, {
        id: 5,
        name: "others"
    }]
}

const categoriesReducer = ( state = INITIAL_STATE) => {
    return state;
}

export default categoriesReducer;