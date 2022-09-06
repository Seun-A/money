import './form.style.scss'
import FormInput from '../form-input/form-input.component';
import Button from '../buttons/buttons.component';

const Form = ({ handleChange, state, handleSubmit }) => (
  <form className='sign-up-in-form d-flex flex-column justify-content-between align-items-center' onSubmit={handleSubmit}>
    <section>
      <h1 className='fw-bold'>Sign In</h1>

      <FormInput 
        name='email'
        type='email'
        label='Email Address'
        value={state['email']}
        onChange= {handleChange}
        autoComplete = 'email'
        required
      />

      <FormInput 
        name='password'
        type='password'
        label='Password'
        value={state['password']}
        onChange= {handleChange}
        autoComplete = 'password'
        required
      />

      <a className='forgot d-block pt-4' href='##'>Forgot Password?</a>
    </section>

    <Button type='signin' />
  </form>
)

export default Form;
