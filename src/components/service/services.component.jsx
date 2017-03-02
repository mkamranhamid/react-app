import React, { Component } from 'react';
import '../../app/App.css';

class ServiceComponent extends Component {
  constructor(){
    super();
    this.handleChange = this.handleChange.bind(this)

  }
  state = {
    email:'',
    password:''
  }
OnSubmitLogin(e){
  e.preventDefault();
  var email = e.target.firstChild.value;
  var password = e.target.firstChild.value;
  console.log('email ',email)
  console.log('password ',password)
}
handleChange(e){
  if (e.target.type == 'email') {
    this.setState({
      email: e.target.value
    })
  } else {
    this.setState({
      password: e.target.value
    })
  }
}
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>THIS IS SERVICES</h1>
        </div>
        <form onSubmit={this.OnSubmitLogin}>
          <input type="email" value={this.state.email} onChange={this.handleChange} placeholder='enater email'/>
          <input type="pssword"  value={this.state.password} onChange={this.handleChange} placeholder='enter password'/>
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default ServiceComponent;
