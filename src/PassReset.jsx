import React, { useState } from "react";
import './App.css';

export const PassReset = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pass);
        
    }

    return(
        <div className= "auth-form-container">
        <h1>Password Reset</h1>
        <form className="passReset-form" onSubmit={handleSubmit}>
            <input value={email} type="email" placeholder="first.last@ossm.edu" id="email" name="email" />
            <input value={pass} type="password" placeholder="password" id="pass" name="pass" />
            <button>Reset</button>
        </form>
        </div>
    )
}
export default PassReset;