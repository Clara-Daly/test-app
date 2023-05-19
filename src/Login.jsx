import React, { useState } from "react";



export const Login = (props) => {
    
    
    const FORM_STATE ={
        Login: 'login-form',
        Register:'sign_up',
        PassReset:'forgot_pass',
        TutorRequests:'tutor_request'
      }

    const [currentForm, setCurrentForm] = useState(FORM_STATE.sign_in)

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,pass);
    }
    return(
        <div className= "auth-form-container">
        <h2>Log In</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            
            <input value={email} type="email" placeholder="first.last@ossm.edu" id="email" name="email" />
            <input value={pass} type="password" placeholder="password" id="password" name="password" />
           
            <button type= "submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() =>setCurrentForm(FORM_STATE.Register)}>Don't have an account? Register here.</button>
        <button className="link-btn" onClick={() =>setCurrentForm(FORM_STATE.PassReset)}>Forgot password?</button>
       </div> 
    )
}
export default Login;