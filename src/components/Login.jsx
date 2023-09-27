import React, { useState } from 'react';
import axios from 'axios';
import "./style/login.css"
import { FaRegEyeSlash, FaEye ,FaGoogle ,FaFacebook} from "react-icons/fa6";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    showpassword: false,
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const togglePasswordVisibility = () => {
    setFormData({
      ...formData,
      showPassword: !formData.showPassword,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', formData);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='login-form'>
    <form onSubmit={handleSubmit} className='login-form-group'>
       <h1 className="login-title">Đăng nhập</h1>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="login-form-control"
          id="login-email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type={formData.showPassword ? "text" : "password"}
          className="login-form-control"
          id="login-password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
          <span className="login-toggle-password" onClick={togglePasswordVisibility}>
          {formData.showPassword ? <FaEye /> : <FaRegEyeSlash />}
        </span>
      </div>
      <span className='forgot-password-title' id="" > <Link className='login-link-without login-link-title'>Quên mật khẩu?</Link></span>
      <button type="submit" className="btn btn-primary login-form-button">Login</button>
      <span className='forgot-password-title-register'>Bạn chưa là thành viên? <Link to= "/register" className='link-register login-link-without'> Đăng kí ngay </Link></span>
      <div className="login-Form-Icons">
        <div className="login-Form-Icons-face">
        <Link to= "https://www.facebook.com/" className="login-icons-link"><FaFacebook/></Link>  
        <p >  <Link className="login-link-without" to= "https://www.facebook.com/" >FaceBook</Link></p>
        </div>
        <div className="login-Form-Icons-Google">
        <Link className="login-icons-link"><FaGoogle/></Link> 
        <p> <Link className="login-link-without" to = "/" >Google</Link> </p>
        </div>
      </div>
    </form>
    </div>
  );
};

export default LoginForm;
