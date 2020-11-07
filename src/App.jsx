import React, { Component } from 'react'
import Navigation from './components/navigation';
import Features from './components/features';
import About from './components/about';
import ServicesPage from './components/servicesPage';
import Contact from './components/contact';
import Policies from './components/policies';
import WorkAspects from './components/workAspects';
import JsonData from './data/data.json';

import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';

import Home from './components/home';
import RecentAccolades from './components/recentAccolades';
import Projects from './components/projects';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <Router>
      <div>
        
        <Navigation />
        <Switch>
          <Route path="/"  exact component={Home}/>
          <Route path="/features" exact render={(props) => (<Features {...props} data={this.state.landingPageData.Features}/>)} />
          <Route path="/about" exact render={(props) => (<About {...props} data={this.state.landingPageData.About}/>)} />
          <Route path="/services" exact render={(props) => (<ServicesPage {...props} data={this.state.landingPageData.ServicesPage}/>)}/>
          <Route path="/recent" exact render={(props) => (<RecentAccolades {...props} data={this.state.landingPageData.recentAccolades}/>)} />
          <Route path="/policies" exact render={(props) => (<Policies {...props} data={this.state.landingPageData.Policies}/>)} />
          <Route path="/projects" exact render={(props) => (<Projects {...props} data={this.state.landingPageData.Projects}/>)} />


        </Switch>

        {/* <Features data={this.state.landingPageData.Features} /> */}
        
        {/* <About data={this.state.landingPageData.About} /> */}
        {/* <Services data={this.state.landingPageData.Services} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        
        <Team data={this.state.landingPageData.Team} />
        <WorkAspects data={this.state.landingPageData.Workaspects}/> */}
        <Contact data={this.state.landingPageData.Contact} />
        
      </div>
      </Router>
    )
  }
}

export default App;

