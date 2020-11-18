import React, { Component } from 'react'

class Policies extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }

      
    render() {
        return (
            <div id="policies" className="text-center">
             <div className="container">
                <div className="section-title">
                    <h2>Policies</h2>
                    <p>
                    We obey certain set of rules to make our work eco-friendly.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-12 accidentfree">
                        <h3>Accident Free Steel</h3>
                        <ul>
                            {this.props.data ? this.props.data.accidentfree.map((d, i) => <li>{d}</li>) : "loading"}
                        </ul>

                    </div>
                    {this.props.data ?
                        this.props.data.array.map((d, i) => (
                            <div key={`${i}`} className="col-xs-12 col-md-12 policy">
                                {" "}
                                <h3>{d.title}</h3>
                                <p>{d.paragraph}</p>
                                <h5>{d.author}</h5>
                                <h5>{d.designation}</h5>
                            </div>
                        )) 
                        : "loading"}


                    {/* <div className="col-xs-12 col-md-12">
                    <a
                    href="#home"
                    className="btn btn-custom btn-lg page-scroll"
                    >
                    Know More
                  </a>{" "}
                    </div> */}

                </div>
             </div>
                
            </div>
        )
    }
}

export default Policies;