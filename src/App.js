import { useForm } from 'react-hook-form'
import './App.css';


function App() {
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm()
  const onSubmit = data => console.log(data)
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <h1>Simple react form</h1>
          <p>Lorem ipsom dolor eque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='row'>
              <label>Name</label>
              <input 
                className='input'
                type='text'
                placeholder='Name'
                {...register('name', {
                  required:true,
                  maxLength:100
                })}
              />
              {errors.name && 
                <span className='error'>
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'maxLength' && 'Max length of name is 100 char'}
                </span>}  
            </div>
            <div className='row'>
              <label>Email</label>
              <input 
                className='input'
                type='text'
                placeholder='Email'
                {...register('email', {
                  required:true,
                  pattern:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
              />
              {errors.email && 
                <span className='error'>
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'pattern' && 'Invalid email adress'}
                </span>}  
            </div>
            <div className='row'>
              <label>Phone</label>
              <input 
                className='input'
                type='text'
                placeholder='Phone'
                {...register('phone', {
                  required:true,
                  pattern:/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
                })}
              />
              {errors.phone && 
                <span className='error'>
                  {errors.name.type === 'required' && 'This field is required'}
                  {errors.name.type === 'pattern' && 'Invalid phone'}
                </span>}  
            </div>
            <div className='row'>
              <label>Message</label>
              <textarea name='message' rows='4' cols='50'  {...register('message', {
                  required:true
                })}>
              </textarea>
              
              {errors.message && 
                <span className='error'>
                  {errors.name.type === 'required' && 'This field is required'}
                </span>}  
            </div>
            <div className='row'>
              <input className='submit' type='submit' value='Submit'/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
