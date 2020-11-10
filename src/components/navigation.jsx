import React, { Component } from "react";
import {Link} from 'react-router-dom';

export class Navigation extends Component {
  componentDidMount(){

  }

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
            <Link to="/"  className="navbar-brand esilogo"><img src="./img/esilogo.png" alt="esi logo"/></Link>
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              
              <li>
                <Link to="/about" data-toggle="collapse" data-target=".navbar-collapse">About</Link>
              </li>
              <li>
                <Link to="/services" data-toggle="collapse" data-target=".navbar-collapse">Services</Link>
              </li>
              <li>
                <Link to="/recent" data-toggle="collapse" data-target=".navbar-collapse">Recent</Link>
              </li>
              <li>
                <Link to="/projects" data-toggle="collapse" data-target=".navbar-collapse">Projects</Link>
              </li>
              <li>
                <Link to="/policies" data-toggle="collapse" data-target=".navbar-collapse">Policies</Link>
              </li>
              <li>
                <a href="#contact" className="page-scroll" data-toggle="collapse" data-target=".navbar-collapse">
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


/* 
This [data-toggle="collapse" data-target=".navbar-collapse"] added in every link to collapse 
the navbar on clicking on linl in small devices

*/