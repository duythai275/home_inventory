export const deleteUser = user => ({
    type: "DELETE_USER",
    payload: user
});

export const editUser = user => ({
    type: "EDIT_USER",
    payload: user
});

export const addUser = user => ({
    type: "ADD_USER",
    payload: user
});

export const login = auth => ({
    type: "LOG_IN",
    payload: auth
});

export const logout = () => ({
    type: "LOG_OUT"
});