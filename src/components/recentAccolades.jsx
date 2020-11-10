import React, { Component } from 'react';
import Robotsvg from './robotsvg';

class RecentAccolades extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }


    render() {
        return (
            <div id="recentaccolades" className="text-center">
                <div className="container">
                    <div className="recent-section">
                        <div className="section-title">
                            <h2>Recent Accolades</h2>
                        </div>
                        <div className="col-md-6 svgbot">
                            <Robotsvg/>    
                        </div>
                        <div className="col-md-6 points">
                            <ul>
                                {this.props.data ? this.props.data.map((d, i) => <li>{d}</li>) : "loading..."}
                            </ul>
                        </div>
                    </div>
                    
                </div>

                {/* <Robotsvg/> */}
            </div>
        )
    }
}

export default RecentAccolades;
