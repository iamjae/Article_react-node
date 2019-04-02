import React, { Component} from 'react';
import './login.css';



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
render () {
    return(

<div className="loginbox">
    <h1>LOGIN HERE</h1>
    <form action="login.php" method="POST">
        <p>Email</p>
        <input required type="text" name="email" placeholder="Enter email" />
        <p>Password</p>
        <input required type="password" name="password" placeholder="Enter password" />
        <input type="submit" name="" label="Submit" />
        <a href="#">Lost your password?</a>
        <br/>
        <a href="signup.html">Don't have an account yet?</a>
        <br/>
    </form>
</div>

    )
 }
}