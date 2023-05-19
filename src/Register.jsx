import React, { useState } from "react";



class Register extends React.Component{
    

    constructor(state){
        super(state)
        this.state ={
            fname:'',
            lname: '',
            email:'',
            password:'',
        }
     }
     changeHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
     }
     submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
     }
     async postData(){
        try{
            let result = await fetch('https://localhost:8080?USER=uname&EMAIL=email', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type':'application/json',
                },
                body: JSON.stringify({
                    key1: this.state
                })
            });

            console.log('Result: ' + result)
                

        }catch(e){
            console.log(e)
        }
     }
    render(){
        const { fname, lname, email, pass } = this.state;
    return(
        <div className= "auth-form-container">
        <h2>Register</h2>
        <form className= "register-form" onSubmit={this.submitHandler}>
            <input value={fname} onChange={ this.changeHandler} name="fname" id="fname" placeholder="First" />
            <input value={lname} onChange={ this.changeHandler} name="lname" id="lname" placeholder="Last" />
            <input value={email} onChange={ this.changeHandler} type="email" placeholder="first.last@ossm.edu" id="email" name="email" />
            <input value={pass} onChange={ this.changeHandler} type="password" placeholder="Password" id="password" name="password" />
            <button onClick={ () => this.postData()}>Register</button>
        </form>
        <button className= "link-btn" onClick={() => this.props.onFormSwitch('Login')}>Already have an Account? Log in here.</button>
        <button className="link-btn" onClick={() => this.props.onFormSwitch('TutorRequests')}>Request a tutor here</button>
        </div>
    )
}
}
export default Register;
