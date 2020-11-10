import React, { Component } from 'react'
import Navigation from './components/navigation';

import About from './components/about';
import ServicesPage from './components/servicesPage';
import Contact from './components/contact';
import Policies from './components/policies';

import JsonData from './data/data.json';

import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';

import Home from './components/home';
import RecentAccolades from './components/recentAccolades';
import Projects from './components/projects';
import Jswsteel from './workingsites/jswsteel';
import Jssl from './workingsites/jssl';
import TataSteel from './workingsites/tataSteel';

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
          {/* <Route path="/features" exact render={(props) => (<Features {...props} data={this.state.landingPageData.Features}/>)} /> */}
          <Route path="/about" exact render={(props) => (<About {...props} data={this.state.landingPageData.About}/>)} />
          <Route path="/services" exact render={(props) => (<ServicesPage {...props} data={this.state.landingPageData.ServicesPage}/>)}/>
          <Route path="/recent" exact render={(props) => (<RecentAccolades {...props} data={this.state.landingPageData.recentAccolades}/>)} />
          <Route path="/policies" exact render={(props) => (<Policies {...props} data={this.state.landingPageData.Policies}/>)} />
          <Route path="/projects" exact render={(props) => (<Projects {...props} data={this.state.landingPageData.Projects}/>)} />
          <Route path="/jswsteel" exact render={ (props) => (<Jswsteel  {...props} data={this.state.landingPageData.jswSteel}/>)} />
          <Route path="/jssl" exact render={ (props) => (<Jssl {...props} data={this.state.landingPageData.jsslSite}/>)} />
          <Route path="/tatasteel" exact render={ (props) => (<TataSteel {...props} data={this.state.landingPageData.tataSteel}/>)} />



        </Switch>

        
        <Contact data={this.state.landingPageData.Contact} />
        
      </div>
      </Router>
    )
  }
}

export default App;




/* "homepage": "http://rajivrawat982.github.io/esiServices"*/