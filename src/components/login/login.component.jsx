import React, { useState } from 'react';
import { connect } from 'react-redux';

import { login } from '../../redux/user/user.action';

const Login = props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        props.login({
            username: username,
            password: password
        });
    }

    return (
        <React.Fragment>
            <h3>Login</h3>
            Username: <input type="text" value={username} onChange={ e => setUsername(e.target.value) } /> <br/>
            Password: <input type="password" value={password} onChange={ e => setPassword(e.target.value) } /> <br/>
            <input type="button" value="Log in" onClick={ () => handleLogin() }/>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    login: auth => dispatch(login(auth))
});

export default connect(null, mapDispatchToProps)(Login);