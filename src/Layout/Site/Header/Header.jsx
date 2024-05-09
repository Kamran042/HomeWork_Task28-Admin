import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container p-0">
          <Link className="navbar-brand" to="">
            Start Bootstrap
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <Link className="nav-link active" to="">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to="shop">
                  About
                </Link>
              </li>
              <li class="nav-item dropdown">
                <Link className="nav-link" to='shop'>Shop</Link>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark m-0" type="submit">
                <i class="bi-cart-fill me-1"></i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  0
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header class="bg-dark py-5">
        <div class="container p-0 px-4 px-lg-5  my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
