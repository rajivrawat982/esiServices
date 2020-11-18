import React, { Component } from 'react';
import {Link} from  'react-router-dom';

class Jswsteel extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
      }
      
    render() {
        return (
            <div id="jswsteel" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>Operational Details of JSW, Tornagallu</h2>
                    </div>
                    <div className="col-md-12 jswsteel-section">
                        <ul>
                            {this.props.data ? this.props.data.map((d, i) => <li><strong>{d.device}</strong>{" : "}{d.point}</li>) : "loading..."}
                        </ul>
                    </div>
                    <Link to="/projects" className="btn btn-custom btn-lg">{`<< Back to Projects`}</Link>
                </div>
            </div>
        )
    }
}

export default Jswsteel;
