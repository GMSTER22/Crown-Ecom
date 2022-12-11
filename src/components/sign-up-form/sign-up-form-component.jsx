import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../utils/firebase/firebase.utils";

const defaultFormFields = { 
  displayName: "", 
  email: "", 
  password: "", 
  confirmPassword: "" 
};


const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if ( !email || !password || !confirmPassword || password !== confirmPassword ) return;

    let user = await createAuthUserWithEmailAndPassword( email, password );

    user.displayName = displayName;
  
  }

  const handleChange = (event) => {

    const {name, value} = event.target;

    setFormFields({ ...formFields, [name]: value });

  };

  return (
    
    <div>

      <h1>Sign up with your email and password</h1>

      <form onSubmit={handleSubmit}>

        <label >Display Name</label>
        <input 
          type="text" 
          onChange={handleChange} 
          name="displayName" 
          value={displayName} 
          required 
        />

        <label>Email</label>
        <input 
          type="email" 
          onChange={handleChange} 
          name="email" 
          value={email} 
          required             
        />

        <label>Password</label>
        <input 
          type="password" 
          onChange={handleChange} 
          name="password" 
          value={password} 
          required             
        />

        <label>Confirm password</label>
        <input 
          type="password" 
          onChange={handleChange} 
          name="confirmPassword" 
          value={confirmPassword} 
          required             
        />

        <button type="submit">Sign Up</button>

      </form>

    </div>

  )

}

export default SignUpForm;