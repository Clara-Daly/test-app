import React, { useState } from "react";

export const TutorRequests = (props) => {
    const [subject, setSubject] = useState('');
    const [tutee, setTutee] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(subject, tutee);
        
    }
    return(
        <div className="auth-form-container">
        <h1>Request tutoring here!</h1>
        <form className= "tutorReq-form" onSubmit={handleSubmit}>
            <label htmlFor="subject">subject</label>
            <input value={subject} type="subject" placeholder="Subject of Interest" id="subject" name="subject" />
            <label htmlFor="tutee">tutee</label>
            <input value={tutee} type="tutee" placeholder="tutee" id="tutee" name="tutee" />
            <button>Submit Request</button>
        </form>
        <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
export default TutorRequests;