import React, {Component, Fragment} from 'react';
import '../stylesheets/App.css';

class Login extends Component {
    render() {
        return  (
            <Fragment>
             <div className="title">Login Page</div>
             <div className="login-form">
                <form>
                    
                    <label>Username: </label>
                    <input type="text" name="uname"></input>
                    <label>Password: </label>
                    <input type="password" name="pass"></input>
                    
                    <input type="submit" value="Submit" />
                </form>
             
             </div>
            </Fragment>
        );
    }
}

export default Login;