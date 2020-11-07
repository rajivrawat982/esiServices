import React, { Component } from 'react';



class ServicesPage extends Component {
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
                            <div className="col-md-12">
                                <h3>{this.props.data.robotics.topic}</h3>
                                <ul>
                                    {this.props.data ? this.props.data.robotics.points.map((d, i) => <li>{d}</li>) : "loading..."}
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

export default ServicesPage;
