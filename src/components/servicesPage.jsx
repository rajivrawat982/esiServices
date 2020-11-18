import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';


class ServicesPage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }

    render() {
        return (
            <div id="servicesPage" className="text-center">
                <div className="container">
                <div className="section-title">
                    <h2>Suite of Services</h2>
                </div>
                <div className="service-section">
                <div className="col-md-12">
                {this.props.data ? (
                    <div    >
                        <h3>{this.props.data.operations.topic}</h3>
                        <ul>
                        {this.props.data ? this.props.data.operations.points.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                        </ul>
                        <div className="service">
                        <ul style={{paddingLeft: "20px"}}>
                                {this.props.data ? this.props.data.operations.keyservices.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                        </ul>
                        </div>
                        <p style={{paddingLeft: "40px"}}>{this.props.data.operations.machines}</p>
                    </div>
                ) : "loading..."}
                </div>
                <div className="col-md-12">
                { this.props.data ?
                        this.props.data.restServices.map((service , i) => (
                            <div className="col-md-12 restservices">
                                <h3>{service.topic}</h3>
                                <ul>
                                    <li>{service.points}
                                    </li>
                                </ul>
                                <div className="keypoints">
                                    <ul>
                                        {service.keypoints ? service.keypoints.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) :  ' '}
                                    </ul>
                                </div>
                            </div>
                        ))

                : "loading..."}
                </div>
                <div>
                { this.props.data ?
                        (
                            <div className="col-md-12 robotics">
                                <h3>{this.props.data.robotics.topic}</h3>
                                <p>
                                    {this.props.data.robotics.paragraph0}
                                </p>
                                <p>
                                    {this.props.data.robotics.paragraph1}
                                </p>

                                <ul>
                                    {this.props.data ? this.props.data.robotics.points.map((d, i) => 
                                    <li>
                                        <strong>{d.title}</strong><br/>
                                        <p>{d.point}</p> 
                                    </li>) : "loading..."}
                                </ul>
                            </div>
                        )
                : "loading..."}
                </div>
               
                </div>
                </div>
            </div>
        )
    }
}

export default withRouter(ServicesPage);
