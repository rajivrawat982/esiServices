import React, { Component } from 'react'

class WorkAspects extends Component {
    render() {
        return (
            <div id="workaspects" className="text-center">
            <div className="container">
                <div className="section-title">
                    <h2>Work Aspects</h2>
                    <p>
                    We provide opportunities on roles listed below.
                    </p>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12">
                        <div className="work-list">
                            <div className="list-style">
                            <div className="col-lg-4 col-sm-6 col-xs-12 col-md-6">
                                <h2>Accommodation</h2>
                                <ul>
                                {this.props.data ? this.props.data.accommodation.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                                </ul>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12 col-md-6">
                                <h2>Office facility</h2>
                                <ul>
                                {this.props.data ? this.props.data.office.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                                </ul>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-12 col-md-6">
                                <h2>Fees and Billing</h2>
                                <ul>
                                {this.props.data ? this.props.data.feesAndBilling.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default WorkAspects;
