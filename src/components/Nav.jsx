import React, { useState } from "react";
import "./style/nav.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
export default function Nav() {
  const [open, setopen] = useState(false);

  return (
    <div className="container">
    <nav className="navbar">
      <div className="Logo">
        <Link to="/">
          <img src="https://www.mioto.vn/static/media/logo-full.ea382559.png"></img>
        </Link>
      </div>
      <ul
        className={open ? "nav-icons" : "nav-link"}
        onClick={() => {
          setopen(false);
        }}
      >
        <li>
          <Link to="/about">Về Mioto</Link>
        </li>
        <li>
          <Link to="/maincar">Trở thành chủ xe</Link>
        </li>
        <li>
          <Link to="/register">Đăng ký</Link>
        </li>
        <li>
          <Link className="Login" to="/login">
            Đăng nhập
          </Link>
        </li>
      </ul>

      <b className="nav-icons" onClick={() => setopen(!open)}>
        {open ? <FaXmark /> : <FaBars />}
      </b>
    
    </nav>

    </div>
  );
}
