import React, { useState } from "react";
import "./App.css"; // Assuming you have the same CSS in a file called style.css

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div className={`wrapper ${isSignUp ? "active" : ""}`}>
      {!isSignUp ? (
        <div className="form-wrapper sign-in">
          <form action="">
            <h2>Login</h2>
            <div className="input-group">
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit">Login</button>
            <div className="signUp-link">
              <p>
                Don't have an account?{" "}
                <a href="#" className="signUpBtn-link" onClick={toggleForm}>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      ) : (
        <div className="form-wrapper sign-up">
          <form action="">
            <h2>Sign Up</h2>
            <div className="input-group">
              <input type="text" required />
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div className="input-group">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div className="remember">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Sign Up</button>
            <div className="signUp-link">
              <p>
                Already have an account?{" "}
                <a href="#" className="signInBtn-link" onClick={toggleForm}>
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AuthForm;
