import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Projects extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }

    render() {
        return (
            <div id="projects" className="text-center">
                <div className="container">
                    <div className="section-title">
                        <h2>Projects</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 project-list">
                            <ul>
                            { this.props.data ? 
                            this.props.data.projects.map((project , i )=> (
                                <li>
                                    <a href={`#${i}`} className="page-scroll">
                                    {project}
                                    </a>
                                </li>
                            ))
                            : "loading..."}
                            </ul>
                        </div>
                        <div className="col-md-6">
                                <img src="./img/projectdiscussion.jpg" alt="project img" className="project-image"/>
                        </div>
                        <div className="col-md-12">
                                { this.props.data ?
                                    this.props.data.sites.map((site, i) => (
                                        <div id={i} className="site">
                                            <h3>{site.siteName}</h3>
                                            <h5>ESI'S Role</h5>
                                            <ul>
                                                {this.props.data ? site.esiRole.map((d, i) => <li>{d}</li>) : "loading..."}
                                            </ul>
                                            <h5>SITE DETAILS</h5>
                                            <ul>
                                                {this.props.data ? site.siteDetails.map((d, i) => <li>{`${d.designation}   :  ${d.name}`}</li>) : "loading..."}
                                            </ul>
                                            { site.buttontag ? 
                                            <Link to={`/${site.siteurl}`}>{`${site.buttontag} >>`}</Link>
                                            : " " }
                                        </div>
                                    ))
                                 : "loading..."}
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Projects;
