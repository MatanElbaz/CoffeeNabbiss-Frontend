import React, { Component } from 'react'
import AuthService from '../services/AuthService';
import "./Login.css";

class login extends Component{
    constructor(props){
        super(props);
        this.state={
           username: '',
           password: '',
           
        }
        this.signin = this.signin.bind(this);
    }
        componentDidMount(){
        //     AuthService.signIn(this.state.id).then( (res) =>{
        //     let user = res.data;
        //     this.setState({firstName: user.username,
        //         lastName: user.password
        //     });
        // });
    }

    signin(){
        let loginRequest = {username: this.state.username, password: this.state.password};
        console.log('username => ' + JSON.stringify(loginRequest));
        // AuthService.signIn(loginRequest).then(res=>{
        //     this.setState({ username: res.data.username, password: res.data.password })
        //     this.props.history.push('/home');
        // });
        //         console.log('username => ' + JSON.stringify(loginRequest));

    }

    changeUserNameHandler= (event) => {
                this.setState({username: event.target.value});
            }
            
     changePasswordHandler= (event) => {
                 this.setState({password: event.target.value});
            }

    render() {
        return (
          <section className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <form className="box">
                    <h1>Login</h1>
                    <p className="text-muted"> Please enter your User Name and Password!</p>                  
                            <input onChange={this.changeUserNameHandler} autoComplete="off" type="text" name="username" placeholder="Username"/>                        
                             <input onChange={this.changePasswordHandler} autoComplete="off" type="password" name="password" placeholder="Password"/> 
                     
                          <a className="forgot text-muted" href="#">Forgot password?</a>

                          <button onClick={this.signin} type="submit" className="loginB" name="" value="Login" href="#">Login</button>

                      <div className="col-md-12">
                        <ul className="social-network social-circle">
                            <li><a href="#" className="icoFacebook" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" className="icoGoogle" title="Google +"><i className="fab fa-google-plus"></i></a></li>
                        </ul>
                    </div>

                      <div className="form-group">
                          <div className="custom-control custom-checkbox">
                          </div>
                      </div>
                      
                  </form>
            </div>
        </div>
    </div>
</section>
        );
    }
}
export default login;

                              {/* <input type="checkbox" className="custom-control-input" id="customCheck1" /> */}
                              {/* <label className="custom-control-label" htmlFor="customCheck1">Remember me</label> */}
