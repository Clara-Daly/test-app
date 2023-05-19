import TutorRequests from './TutorRequests.jsx'
import Register from './Register.jsx'
import Login from "./Login.jsx"
import PassReset from "./PassReset.jsx"
import './App.css'
import React, {useState} from 'react'
function App() {
  const FORM_STATE ={
    Login: 'Login',
    Register:'Register',
    PassReset:'PassReset',
    TutorRequests:'TutorRequests'
  }

  const [currentForm, setCurrentForm] = useState(FORM_STATE.Login);
  
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  
    
    
    if (currentForm === 'Login'){
      return (
        <div className = "App">
        <Login/>
        </div>
      );
    }
    else if (currentForm === 'Register'){
      return (
        <div className = "App">
        <Register/>
        </div>
      );
    }
    else if (currentForm === 'PassReset') {
      return (
        <div className = "App">
        <PassReset/>
        </div>
      );
    }
    
    
  
  
}

export default App;
