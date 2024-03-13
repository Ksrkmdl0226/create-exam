import React from "react";
import logo from "../assets/images/exam.png";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="">
      <nav
        class="navbar navbar-expand-lg shadow-lg fixed-top"
        style={{ backgroundColor: "#596ABB" }}
      >
        <div class="container-fluid">
          <a class="navbar-brand text-light fw-normal">
            <img src={logo} style={{ height: "30px" }} />
            <span className="ms-2 fs-6 fw-bold">Exam Portal</span>
          </a>
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
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active text-light fw-normal fs-6 user-select-none"
                  aria-current="page"
                  onClick={() => navigate("/")}
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-auto p-4 mt-5">{children}</div>
    </div>
  );
};

export default MainLayout;
