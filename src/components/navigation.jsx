import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            {/* <a className="navbar-brand page-scroll" href="#page-top">
              Engineering Services International
            </a>{" "} */}
            <Link to="/" className="navbar-brand">Engineering Services International</Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/recent">Recent</Link>
              </li>
              <li>
                <Link to="/policies">Policies</Link>
              </li>
              {/* <li>
                <a href="#testimonials" className="page-scroll">
                  Testimonials
                </a>
              </li> */}
              <li>
                {/* <a href="#team" className="page-scroll">
                  Team
                </a> */}
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
