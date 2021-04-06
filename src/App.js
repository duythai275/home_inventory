import React from 'react';
import { connect } from 'react-redux';
import Mainpage from './components/mainpage/mainpage.component';
import Login from './components/login/login.component';

const App = props => {
  return (
    <div>
    {
      ( props.auth.currentLoggedInUser === null ) ? <Login /> : <Mainpage />
    }
    </div>
  );
}

const mapStateToProps = store => ({
  auth: store.userStore.auth
});

export default connect(mapStateToProps)(App);
