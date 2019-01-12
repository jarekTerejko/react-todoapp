import React, { Fragment } from "react";

const Header = props => {
  return (
    <Fragment>
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo center">
            {props.title}
          </a>
        </div>
      </nav>
      <div className="row">
        <div className="container">
          <h5 className="red-text lighten-1">{props.subtitle}</h5>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
