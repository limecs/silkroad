import React, { useState } from 'react';
import user_icon from "./user.png";
import password from "./password.png";
import email from "./email.webp";
import './Loginsignin.css';
import usersData from './users.json'; 

const Loginsignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (action === "Login") {
    
      const userExists = usersData.some(
        user => user.username === formData.email && user.password === formData.password
      );
      
      if (userExists) {
        setMessage('Login successful!');
      
      } else {
        setMessage('Invalid credentials!');
      }
    } else {
  
      const userExists = usersData.some(
        user => user.username === formData.email
      );
      
      if (userExists) {
        setMessage('User already exists!');
      } else {
      
        setMessage('Sign up successful! (Not saved to JSON in this demo)');
      }
    }
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{action}</div>  
        <div className='underline'></div>
      </div>
      
      {message && <div className="message">{message}</div>}
      
      <div className='inputs'>
        {action === "Login" ? <div/> :
          <div className='input'>
            <img src={user_icon} alt=''/>
            <input 
              type='text' 
              placeholder='Name'
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        }
        
        <div className='input'>
          <img src={email} alt=''/>
          <input 
            type='email' 
            placeholder='Email Id'
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className='input'>
          <img src={password} alt=''/>
          <input 
            type='password' 
            placeholder='Password'
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      
      {action === "Sign Up" ? <div/> :
        <div className="forget-password">lost password <span>click here</span></div>
      }
      
      <div className="submit-container">
        <div 
          className={action === "Login" ? "submit gray" : "submit"} 
          onClick={() => {
            setAction("Sign Up");
            setMessage('');
          }}
        >
          Sign Up
        </div>
        <div 
          className={action === "Sign Up" ? "submit gray" : "submit"} 
          onClick={() => {
            setAction("Login");
            setMessage('');
          }}
        >
          Login
        </div>
      </div>
      
      <div className="submit-button" onClick={handleSubmit}>
        {action === "Login" ? "Login" : "Sign Up"}
      </div>
    </div>
  );
}

export default Loginsignup;