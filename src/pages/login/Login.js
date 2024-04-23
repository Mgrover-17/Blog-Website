import React from "react";
import bgImage from "../../Assets/myAccount.jpg";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <section className="login">
        <div className="containers">
          <div className="backImg">
            <img src={bgImage} alt="" />
            <div className="text">
              <h1>Login</h1>
            </div>
          </div>
          <form>
            <span>Username or email address</span>
            <input type="text" required />
            <span>Password</span>
            <input type="password" required />
            <button className="button">Login</button>
            <div className="google-auth-container">
            <GoogleOAuthProvider clientId="79195960358-sfv33bar57e4ll0e7cr0hka84jgch2jq.apps.googleusercontent.com" >
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              
            </GoogleOAuthProvider>
            </div>
            <Link to="/register">Register</Link>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
