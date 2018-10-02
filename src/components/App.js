import React, {Component, Fragment} from 'react';
import '../stylesheets/App.css';
import Registration from './Registration';
// import Login from './Login';
import List from './List';



class App extends Component {
    render() {
        return  (
            
            <Fragment>
             {/* <div className="title">Hello From React</div>
             <div className="description">Hello From React</div> */}
             {<Registration /> }
             {/* <List /> */}
             {/* <Login /> */}
            </Fragment>
            
        )
    }
}

export default App;