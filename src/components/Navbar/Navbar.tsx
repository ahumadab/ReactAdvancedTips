import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav
      className="container-fluid"
      //   style={{
      //     zIndex: 99,
      //     position: "fixed",
      //     backgroundColor: "white",
      //     boxShadow:
      //       "0.0145rem 0.029rem 0.174rem rgba(27, 40, 50, 0.01698),0.0335rem 0.067rem 0.402rem rgba(27, 40, 50, 0.024),0.0625rem 0.125rem 0.75rem rgba(27, 40, 50, 0.03),0.1125rem 0.225rem 1.35rem rgba(27, 40, 50, 0.036),0.2085rem 0.417rem 2.502rem rgba(27, 40, 50, 0.04302),0.5rem 1rem 6rem rgba(27, 40, 50, 0.06),0 0 0 0.0625rem rgba(27, 40, 50, 0.015)",
      //   }}
    >
      <ul>
        <li>
          <strong>React Advanced Guide</strong>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#">Link</a>
        </li>
        <li>
          <a href="#" role="button">
            Button
          </a>
        </li>
      </ul>
    </nav>
  );
};
