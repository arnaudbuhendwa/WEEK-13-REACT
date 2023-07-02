import React from 'react';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <div className="login-form">
    <h3 className="login-heading">Log In</h3>
    
    <form>
     
      <div> 
      <input type="text" placeholder="Username" />
      </div>

      <div>
      <input type="password" placeholder="Password" />
      </div>

      <div>
      <button type="submit">Enter</button>
      </div>

    </form>
  </div>
  );
};

export default LoginForm;
