import React, { Component} from 'react';
// import './materialize/css/materialize.min.css';
import './MDB-Free/css/bootstrap.min.css';




export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
          name: '',
          email: '',
          password: '',
          alert: false,
        }
        this.handleName = this.handleName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleEmail = this.handleEmail.bind(this)
    };
    
    handleName(e){
        this.setState({name:e.target.value})
    }
    handlePassword(e) {
        this.setState({password:e.target.value})
    }
    handleEmail(e) {
        this.setState({email:e.target.value})
    }

            
    render() {
        return(
              <div className="wrapper">
                  <div>
                      <form>
                       <input type = "text"  placeholder = "enter name" onChange />
                       <input type = "text"  placeholder = "enter email" />
                       <input type = "text"  placeholder = "enter password" />
                       <input type = "text"  placeholder = "confirm password" />
                      </form>
                  </div>
              </div>
        )
    }
}