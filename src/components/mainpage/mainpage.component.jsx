import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';

import { logout } from '../../redux/user/user.action';

import Users from '../users/users.component';
import Inventory from '../inventory/inventory.component';

const Mainpage = props => {
    return (
        <React.Fragment>
            <h1>Home Inventory</h1>
            <h4>Menu</h4>
            <ul>
                <li><Link to="/inventory">Inventory</Link></li>
                <li><Link to="/">Admin</Link></li>
                <li><a onClick={() => props.logout() }>Logout</a></li>
            </ul>
            <Switch>
                <Route exact path="/" component={Users} />
                <Route exact path="/inventory" component={Inventory} />
            </Switch>
        </React.Fragment>
    )
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(Mainpage);