import React from "react";

export class Login extends React.Component{
    componentDidMount(){
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }
    render(){
        return (
            <div>
                <br /><br /><br />
                <h1>Login</h1>
                <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true" data-scope="public_profile,email" data-onlogin="checkLoginState();"></div>
            </div>
        );
    }
}