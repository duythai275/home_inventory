import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addUser, editUser, deleteUser } from '../../redux/user/user.action';

const Users = props => {
    const [button, setButton] = useState("Add");
    const [form, setForm] = useState({
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: ""
    });

    const editUser = () => {
        props.editUser(form);
        setForm({
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: ""
        });
    }

    const addUser = () => {
        props.addUser(form);
        setForm({
            username: "",
            password: "",
            email: "",
            firstname: "",
            lastname: ""
        });
    }

    const loadForm = user => {
        setButton("Save");
        setForm(user);
    }

    return (
        <React.Fragment>
            <h3>Manage Users</h3>
            <table width="100%" border="1px">
                <tr>
                    <td align="center" width="20%"><strong>Username</strong></td>
                    <td align="center" width="20%"><strong>First Name</strong></td>
                    <td align="center" width="20%"><strong>Last Name</strong></td>
                    <td align="center" width="20%"><strong>Delete</strong></td>
                    <td align="center" width="20%"><strong>Edit</strong></td>
                </tr>
                {
                    props.users.map( user => 
                        <tr>
                            <td>{user.username}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td><input type="button" value="Delete" onClick={() => props.deleteUser(user)} /></td>
                            <td><input type="button" value="Edit" onClick={() => loadForm(user)} /></td>
                        </tr>
                    )
                }
            </table>
            <h3>{( button === "Add" ) ? "Add User" : "Edit User"}</h3>
            Username: <input type="text" value={form.username} disabled={( button !== "Add" )} onChange={e => setForm({...form, username: e.target.value})}/> <br/>
            Password: <input type="password" value={form.password}  onChange={e => setForm({...form, password: e.target.value})}/> <br/>
            Email: <input type="text" value={form.email} onChange={e => setForm({...form, email: e.target.value})}/> <br/>
            First Name: <input type="text" value={form.firstname} onChange={e => setForm({...form, firstname: e.target.value})}/> <br/>
            Last Name: <input type="text" value={form.lastname} onChange={e => setForm({...form, lastname: e.target.value})}/> <br/>
            {   ( button === "Add" ) ? 
                <input type="button" value={button} onClick={() => addUser()} /> : 
                <input type="button" value={button} onClick={() => editUser()} />
            }
        </React.Fragment>
    )
}

const mapStateToProps = store => ({
    users: store.userStore.users
});

const mapDispatchToProps = dispatch => ({
    addUser: user => dispatch(addUser(user)),
    editUser: user => dispatch(editUser(user)),
    deleteUser: user => dispatch(deleteUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);