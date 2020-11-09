import React, { Component } from "react";
import { Link } from "react-router-dom";


export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Suite of Services</h2>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
          <Link to="/services" className="btn btn-custom btn-lg">Services</Link>
        </div>
      </div>
    );
  }
}

export default Services;
