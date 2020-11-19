import React, { Component } from 'react';




class about extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>History and The journey so far</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'} </p>
                <p>{this.props.data ? this.props.data.paragraph1 : 'loading...'} </p>
                <p>{this.props.data ? this.props.data.paragraph2 : 'loading...'} </p>
                <p>{this.props.data ? this.props.data.paragraph3 : 'loading...'} </p>
                <p>{this.props.data ? this.props.data.paragraph4 : 'loading...'} </p>
                <h3>Core Team</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                    {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
              <div className="col-md-12" style={{marginTop: "30px"}}>
                  {this.props.data ? this.props.data.coreteam.map((person, i) => (
                    <div key={`${i}`} className="col-md-12 col-sm-12 coremember">
                      <h4>{person.name}</h4>
                      <div className="col-md-12 col-sm-12">
                      <div className="col-lg-3 col-sm-4 col-xs-12 text-center">
                        <img src={person.imgsrc} alt="member"></img>
                      </div>
                      <div className="col-lg-9 col-sm-8">
                          <p>{person.info}</p>
                      </div>
                      </div>
                    </div>
                  )) : "loading..."}
              </div>
              <div className="col-md-12 consultants" style={{marginTop: "30px"}}>
                  <div className="col-md-12 col-sm-6 col-xs-12">
                    <h2>Consultants of ESI</h2>
                    <ul>
                      {this.props.data ? this.props.data.consultants.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about;
