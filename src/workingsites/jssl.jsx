import React, { Component } from 'react';
import { Link} from 'react-router-dom';

export class Jssl extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }

    render() {
        return (
            <div id="jssl" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>Manpower details of jssl site, Tornagallu</h2>
                    </div>
                    <div className="col-md-12 jssl-section">
                        <h4>The following manpower is being supplied to JSSL</h4>
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

export default Jssl;
