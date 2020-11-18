import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-md-offset-1 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading..."} <br/> <br/>
                    {this.props.data ? this.props.data.paragraph2 : "Loading..."} <br/> <br/>
                    {this.props.data ? this.props.data.paragraph3 : "Loading..."} <br/> <br/>
                    {this.props.data ? this.props.data.paragraph4 : "Loading..."} <br/> <br/>
                    {this.props.data ? this.props.data.paragraph5 : "Loading..."} <br/> <br/>
                    {this.props.data ? this.props.data.paragraph6 : "Loading..."} <br/> <br/>
                    {this.props.data ? this.props.data.paragraph7 : "Loading..."} <br/> <br/>
                    {this.props.data ? this.props.data.paragraph8 : "Loading..."} 

                    
                  </p>
                  {/* <a
                    href="#features"
                    className="btn btn-custom btn-lg page-scroll"
                  >
                    Learn More
                  </a>{" "} */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
