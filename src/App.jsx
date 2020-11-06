import React, { Component } from 'react'
import Navigation from './components/navigation';
import Features from './components/features';
import About from './components/about';
import ServicesPage from './components/servicesPage';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import Policies from './components/policies';
import WorkAspects from './components/workAspects';
import JsonData from './data/data.json';

import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';

import Home from './components/home';

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
        </Switch>

        {/* <Features data={this.state.landingPageData.Features} /> */}
        
        {/* <About data={this.state.landingPageData.About} /> */}
        {/* <Services data={this.state.landingPageData.Services} />
        <Gallery />
        <Testimonials data={this.state.landingPageData.Testimonials} />
        <Policies data={this.state.landingPageData.Policies}/>
        <Team data={this.state.landingPageData.Team} />
        <WorkAspects data={this.state.landingPageData.Workaspects}/> */}
        <Contact data={this.state.landingPageData.Contact} />
        
      </div>
      </Router>
    )
  }
}

export default App;

