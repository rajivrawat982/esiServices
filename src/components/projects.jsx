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
                    <div className="col-md-12">
                            <h4>{this.props.data ? this.props.data.paragraph : "loading..."}</h4>
                    </div>
                   
                        <div className="project-images">
                        <div className="portfolio-items">
                            <div className="col-sm-4 col-lg-3 col-xs-6">
                                <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    <a
                                    href="#0" className="page-scroll"
                                    title="Project Title"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>JSW Steel Ltd</h4>
                                        <h6>Tornagallu, Karnataka State</h6>
                                    </div>
                                    <img
                                        src="img/project/01-jswSteel.jpg"
                                        className="img-responsive"
                                        alt="Project Title"
                                    />{" "}
                                    </a>{" "} 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-3 col-xs-6">
                                <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    
                                    <a
                                    href="#1" className="page-scroll"
                                    title="Project Title"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>JSW Severfield Structures Ltd</h4>
                                        <h6>Tornagallu, Karnataka State</h6>
                                    </div>
                                    <img
                                        src="img/project/02-jswSevere.jpg"
                                        className="img-responsive"
                                        alt="Project Title"
                                    />{" "}
                                    </a>{" "} 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-3 col-xs-6">
                                <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    
                                    <a
                                    href="#2" className="page-scroll"
                                    title="Project Title"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>Andritz</h4>
                                        <h6>Tornagallu, Karnataka State</h6>
                                    </div>
                                    <img
                                        src="img/project/03-andritz.jpg"
                                        className="img-responsive"
                                        alt="Project Title"
                                    />{" "}
                                    </a>{" "} 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-3 col-xs-6">
                                <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    
                                    <a
                                    href="#3" className="page-scroll"
                                    title="Project Title"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>JSW Cement</h4>
                                        <h6>Tornagallu, Karnataka State</h6>
                                    </div>
                                    <img
                                        src="img/project/04-jswCement.jpg"
                                        className="img-responsive"
                                        alt="Project Title"
                                    />{" "}
                                    </a>{" "} 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-3 col-xs-6">
                                <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    
                                    <a
                                    href="#4" className="page-scroll"
                                    title="Project Title"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>Jindal Aluminium</h4>
                                        <h6>Jindal nagar, Bangalore-73</h6>
                                    </div>
                                    <img
                                        src="img/project/05-jindalSteel.jpg"
                                        className="img-responsive"
                                        alt="Project Title"
                                    />{" "}
                                    </a>{" "} 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-3 col-xs-6">
                                <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    
                                    <a
                                    href="#5" className="page-scroll"
                                    title="Project Title"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>TBSL</h4>
                                        <h6>Meramandali, Odisha</h6>
                                    </div>
                                    <img
                                        src="img/project/06-bhushanSteel.jpg"
                                        className="img-responsive"
                                        alt="Project Title"
                                    />{" "}
                                    </a>{" "} 
                                </div>
                                </div>
                            </div>
                            <div className="col-sm-4 col-lg-3 col-xs-6">
                                <div className="portfolio-item">
                                <div className="hover-bg">
                                    {" "}
                                    <a
                                    href="#6" className="page-scroll"
                                    title="Project Title"
                                    data-lightbox-gallery="gallery1"
                                    >
                                    <div className="hover-text">
                                        <h4>Tata steel </h4>
                                        <h6>Kalinganagar, Odisha</h6>
                                    </div>
                                    <img
                                        src="img/project/07-tataSteel.jpg"
                                        className="img-responsive"
                                        alt="Project Title"
                                    />{" "}
                                    </a>{" "} 
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>
                
                        <div className="col-md-6  col-sm-12 col-xs-12 project-list">
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
        )
    }
}

export default Projects;
