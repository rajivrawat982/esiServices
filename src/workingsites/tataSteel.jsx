import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export class TataSteel extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
      
    render() {
        return (
            <div id="tatasteel" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>Operational Details of Tata Steel, Kalinganagar, Odisha</h2>
                    </div>
                    <div className="col-md-12 tata-section">
                    <ul>
                        {this.props.data ? this.props.data.map((d, i) => <li>{d}</li>) : "loading..."}
                    </ul>
                    </div>
                    <Link to="/projects" className="btn btn-custom btn-lg">{`<< Back to Projects`}</Link>
                </div>
            </div>
        )
    }
}

export default TataSteel;
