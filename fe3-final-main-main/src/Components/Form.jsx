import React, { useState } from "react";
import { ContextGlobal } from '../Components/utils/global.context';

import './css/form.css'

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const { state } = ContextGlobal();
  const [formData, setFormData] = useState({ fullName: '', email: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.fullName.length < 5 || !formData.email.includes('@')) {
      setError('Please verify your information again.');
      setSuccess(false);
    } else {
      setError('');
      setSuccess(true);
    }
  };

  return (
    <div className={`form ${state.theme}`}>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Send</button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {success && (
        <div className="success-message">
          Thank you {formData.fullName}, we will contact you as soon as possible via email.
        </div>
      )}
    </div>
  );
};

export default Form;