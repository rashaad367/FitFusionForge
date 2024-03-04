import React from "react";
import './LoginBox.css';

function LoginBox() {

    return (<>
        <div className="box">
        <h3 className="login_header">Login</h3>
        <form action="" method="get">
            <div className="emailpassword">
                <input type="email" name="" id="" placeholder="Email"/>
                <input type="password" name="" id="" placeholder="Password"/>
            </div>
        </form>
        <h6>Don't have an account yet?</h6>
        <a><h3>Sign up</h3></a>
    </div></>)
}

export default LoginBox