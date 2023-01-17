
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles';

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => setFormFields( defaultFormFields );

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if ( !email || !password ) return;

    try {

      const user = await signInAuthUserWithEmailAndPassword( email, password );

      resetFormFields();

    } catch(error) {

      switch(error.code) {
        case 'auth/wrong-password':
          alert('incorect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }

    }

  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value
    })

  }

  return (

    <SignInContainer>

      <h2>I already have an account?</h2>
      <h3>Sign in with your email and password</h3>

      <form onSubmit={ handleSubmit }>

        <FormInput
          label={"email"}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}  
          required
        />

        <FormInput
          label={"password"}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required  
        />

        <ButtonsContainer>

          <Button type='submit'>SIGN IN</Button>

          <Button buttonType={ BUTTON_TYPE_CLASSES.google } type="button" onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>

        </ButtonsContainer>

      </form>

    </SignInContainer>

  )

}

export default SignInForm;