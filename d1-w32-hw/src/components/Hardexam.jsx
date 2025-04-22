

import React from 'react';
import useForm from './useForm';  

export default function Hardexam() {
 
  const handleSubmit = (formData) => {
    alert(`Email: ${formData.email}, Password: ${formData.password}`);
  };

  const { handleChange, handleSubmit: formSubmit } = useForm({ email: '', password: '' }, handleSubmit);

  return (
    <div>
      <form onSubmit={formSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
