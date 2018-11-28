import React from "react";

export class Login extends React.Component{
    componentDidMount(){
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    }
    render(){
        return (
            <div style={{textAlign:"center",alignContent:"center",height:"100%",width:"100%",display:"grid",position:"fixed"}}>
                <div>
                    <h1>Login Comming Soon</h1>
                </div>
                <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="true" data-scope="public_profile,email" data-onlogin="checkLoginState();"></div>
            </div>
        );
    }
}