import React, {Component, Fragment} from 'react';
import '../stylesheets/App.css';

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '',
                      surname: '',
                      email: '',
                      username: '',
                      password: ''  
    };
    
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSurnameChange = this.handleSurnameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleNameChange(event) {
        this.setState({name: event.target.value,});
      }

      handleSurnameChange(event) {
        this.setState({surname: event.target.value,});
      }

      handleEmailChange(event) {
        this.setState({email: event.target.value,});
      }

      handleUsernameChange(event) {
        this.setState({username: event.target.value,});
      }

      handlePasswordChange(event) {
        this.setState({password: event.target.value,});
      }
    
      handleSubmit(event) {
          
         alert('User was submitted: ' + 'Name: ' + this.state.name + " " + 'Surname: ' + this.state.surname + " " + "Email: " + this.state.email);
       // event.preventDefault(); // ok-ic heto gracner@ mnum en
      }



    render() {
        return  (
            <Fragment>
                <div className="col-md-4 reg">
                    <div className="title">Registration Page</div>
                    <div className="reg-form">
                        <form onSubmit={this.handleSubmit}>
                            
                            <input type="text" name="name" onChange={this.handleNameChange} value={this.state.name} placeholder="Name"></input>
                            
                            <input type="text" name="surname" onChange={this.handleSurnameChange} value={this.state.surname} placeholder="Surname"></input>
                           
                            <input type="email" name="email" onChange={this.handleEmailChange} value={this.state.email} placeholder="E-mail"></input>
                            
                            <input type="text" name="uname" onChange={this.handleUsernameChange} value={this.state.username} placeholder="Username"></input>
                            
                            <input type="password" name="pass" onChange={this.handlePasswordChange} value={this.state.password} placeholder="Password"></input>

                            <input type="submit" value="Submit" />
                        </form>
                    
                    </div>
                </div>    
            </Fragment>
        );
    }
}

export default Registration;