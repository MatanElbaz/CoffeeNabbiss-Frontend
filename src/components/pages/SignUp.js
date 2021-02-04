import React, { Component } from "react";

import "./SignUp.css";

export default class SignUp extends Component {
    render() {
        return (
            <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="card">
                <form class="box">
                <h1>Sign Up</h1>
                <p class="text-muted"> Please enter your details to Sign-Up!</p> 
                
                    <input type="text" className="form-control" placeholder="Username" />
                                
                    <input type="email" className="form-control" placeholder="Enter email" />
                 
                    <input type="password" className="form-control" placeholder="Enter password" />
  

                    <input type="submit" name="" value="Sign-Up" href="#"/>
                
                    <p class="text-muted">   Already registered ? <a href="/login"> Login</a></p>
                
            </form>
            </div>
        </div>
    </div>
</div>
        );
    }
}