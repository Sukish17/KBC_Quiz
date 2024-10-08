import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css'

function Login({ setIsLoggedIn, isLoggedIn }) {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const showErrorMessage = password.length < 1
    const showErrorMessage1 = email.length < 1


    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then(result => {
                if (result.data === "Success") {
                    axios.get('http://localhost:3001/user', { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                              setIsLoggedIn(true);
                              navigate("/home", { state: { user: response.data.user } });
                            }
                        });
                } else {
                    alert("Login Failed");
                }
            })
            .catch(err => alert(err));
    };
  
   
   

   

    return (
        <div className="login-form-container">
        <form className="form-container" onSubmit={handleLogin}>
          <img
            src="https://is4-ssl.mzstatic.com/image/thumb/Purple113/v4/e3/f9/6a/e3f96a66-f307-33fc-d09f-58952a5f46ed/source/512x512bb.jpg"
            className="website-logo"
            alt="website logo"
          />
          <div className="input-container">
              <label className="input-label" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                id="username"
                className="input-field"
                name='email'
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="username"
              />
              {showErrorMessage1&&(<p className="kon">*Enter value</p>)}
          </div>
          <div className="input-container">
          
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="input-field"
            name='password'
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="password"
          />
          {showErrorMessage&&(<p className="kon">*Enter value</p>)}
        
          </div>
          <button className="login-button" type="submit">
            Login
          </button>
          <p>Don't have an account ? <a href='/signup'>Signup</a></p>
        </form>
      </div>
    
    );

   
}

export default Login;
