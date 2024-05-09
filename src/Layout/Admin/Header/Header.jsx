import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>Logo</h1>
      </div>
      <div className="header__center">
        <ul>
          <li>
            <Link to='/admin'>Dashboard</Link>
          </li>
          <li>
            <Link to='/admin/products'>Products</Link>
          </li>
          <li>
            <Link to='/admin/add'>Add Products</Link>
          </li>
        </ul>
      </div>
      {/* <div className="header__right">
        <button>Login</button>
        <button>Registr</button>
      </div> */}
    </div>
  );
};

export default Header;
