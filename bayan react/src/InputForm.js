import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { NameContext } from './App';

function InputForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { setName } = useContext(NameContext);

  const onSubmit = data => {
    console.log(data);
    setName(data.name); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Name</label>
        <input 
          {...register('name', { 
            required: 'Name is required', 
            maxLength: { value: 2, message: 'Max length is 2' },
            pattern: { value: /^[a-zA-Z\s]+$/, message: 'Name must contain only English letters and spaces' }
          })} 
          style={errors.name && { border: '1px solid red' }}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
      </div>

      <div>
        <label>Email</label>
        <input 
          {...register('email', { 
            required: 'Email is required', 
            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, message: 'Invalid email address' }
          })} 
          style={errors.email && { border: '1px solid red' }}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      </div>

      <div>
        <label>Confirm Email</label>
        <input 
          {...register('confirmEmail', { 
            required: 'Confirm Email is required', 
            validate: value => value === watch('email') || 'Emails do not match'
          })} 
          style={errors.confirmEmail && { border: '1px solid red' }}
        />
        {errors.confirmEmail && <span style={{ color: 'red' }}>{errors.confirmEmail.message}</span>}
      </div>

      <div>
        <label>Pas</label>
        <input 
          {...register('system', { 
            maxLength: { value: 6, message: 'Max length is 6' }
          })} 
          style={errors.system && { border: '1px solid red' }}
        />
        {errors.system && <span style={{ color: 'red' }}>{errors.system.message}</span>}
      </div>

      <button type="Enter">Enter</button>
    </form>
  );
}

export default InputForm;
