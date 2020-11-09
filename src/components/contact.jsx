import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Persons to be Contacted</h2>
                </div>
                <div className="contact-person">
                  {this.props.data ? 
                    this.props.data.persons.map((person, i) => (
                      <div key={`${i}`}>
                        <h5>{person.name}</h5>
                        <h6>({person.designation})</h6>
                    <p>phone: <strong>{person.phone}</strong><br/>
                        email: <strong>{person.email}</strong>
                    </p>
                    <br/>
                      </div> 
                    ))
                  :"loading"}
                </div>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  <strong>{this.props.data ? this.props.data.address : "loading"}</strong>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  <strong>{this.props.data ? this.props.data.phone : "loading"}</strong>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  <strong>{this.props.data ? this.props.data.email : "loading"}</strong>
                </p>
              </div>
            </div>
            <div className="col-md-12">
              {/* <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 esiservices.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;

// <form name="sentMessage" id="contactForm" noValidate>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="text"
//                         id="name"
//                         className="form-control"
//                         placeholder="Name"
//                         required="required"
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="form-group">
//                       <input
//                         type="email"
//                         id="email"
//                         className="form-control"
//                         placeholder="Email"
//                         required="required"
//                       />
//                       <p className="help-block text-danger"></p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="form-group">
//                   <textarea
//                     name="message"
//                     id="message"
//                     className="form-control"
//                     rows="4"
//                     placeholder="Message"
//                     required
//                   ></textarea>
//                   <p className="help-block text-danger"></p>
//                 </div>
//                 <div id="success"></div>
//                 <button type="submit" className="btn btn-custom btn-lg">
//                   Send Message
//                 </button>
//               </form>
