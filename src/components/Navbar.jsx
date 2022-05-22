import React from 'react';
import logo from '../assets/logo.svg';

const Navbar = (props) => {
  const navbarOptions = [
    {
      "iconName": "person_outline",
      "label": "Sign In"
    },
    {
      "iconName": "shopping_bag",
      "label": "Cart"
    },
    {
      "iconName": "support",
      "label": "Help"
    },
    {
      "iconName": "search",
      "label": "Search"
    },
  ]
  return (
    <section className="navbar">
      <div className="container">
        <img  alt='' className="logo" src={logo} />

        <div className="location">
          <span className="city"> {props.city}</span>
          <span className="state">{props.state}, {props.country}</span>
        </div>

        <div className="navbar-options">
          {
            navbarOptions.map(navbarOption => (
              <div key={navbarOption.iconName} className="navbar-option">
                <span className="material-icons"> {navbarOption.iconName} </span> {navbarOption.label}
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Navbar;
