import React, { useState } from "react";
import { FaRegEyeSlash, FaEye ,FaFacebook , FaGoogle} from "react-icons/fa6";
import { Link } from "react-router-dom";
import './style/register.css';
function Register() {
  
  const [formData, setFormData] = useState({
    PhoneNumber: "",
    ShowName: "",
    password: "",
    showPassword: false,
    password2: "",
    showPassword2: false,
    code: "",
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

  const togglePasswordVisibilityy = () => {
    setFormData({
      ...formData,
      showPassword2: !formData.showPassword2,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add logic to handle form submission here
  };

  return (
    <div className="container-register">
    <form className="register-form" onSubmit={handleSubmit}>
      <h1 className="title">Đăng Ký</h1>
      <div className="Form-PhoneNumber">
        <label htmlFor="PhoneNumber">Số điện thoại:</label>
        <input
          type="text"
          name="PhoneNumber"
          value={formData.PhoneNumber}
          onChange={handleChange}
          required
        />
      </div>

      <div className="Form-Showname">
        <label htmlFor="ShowName">Tên hiển thị:</label>
        <input
          type="text"
          name="ShowName"
          value={formData.ShowName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="Form-Password">
        <label htmlFor="password">Mật Khẩu:</label>
        <div className="Form-password-flexbox">
        <input
          type={formData.showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="input-password"
        />
        <span className="toggle-password" onClick={togglePasswordVisibility}>
          {formData.showPassword ? <FaEye /> : <FaRegEyeSlash />}
        </span>
        </div>
      </div>

      <div className="password2">
        <label htmlFor="password2">Mật Khẩu:</label>
        <input
          type={formData.showPassword2 ? "text" : "password"}
          name="password2"
          value={formData.password2}
          onChange={handleChange}
          required
          id = ""
        />
        <span className="toggle-password2" onClick={togglePasswordVisibilityy}>
          {formData.showPassword2 ? <FaEye /> : <FaRegEyeSlash />}
        </span>
      </div>

      <div className="Form-Code">
        <label htmlFor="">Mã giới thiệu nếu có</label>
        <input
          type="text"
          name="code"
          value={formData.code}
          onChange={handleChange}
    
        />
      </div>

   <div className="Form-Checkboxx" >
    <input type="checkbox" id="Form-check" />
    <label htmlFor="">Tôi đồng ý với chính sách của Mioto.<Link to="" className="Detail">Chi tiết</Link>
      </label>
  
   </div>

      <button type="submit" className="button-register">
        Đăng kí
      </button>

      <div className="Form-Icons">
        <div className="Face">
        <Link to= "https://www.facebook.com/" className="link-without-underline"><FaFacebook/></Link>  
        <p>  <Link className="link-without">FaceBook</Link></p>
        </div>
        <div className="Google">
        <Link className="link-without-underline"><FaGoogle/></Link> 
        <p> <Link className="link-without" >Google</Link> </p>
        </div>
      </div>
    </form>
    </div>
  );
}

export default Register;
