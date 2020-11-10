import React, { Component } from 'react';
import Header from './header';
import JsonData from '../data/data.json';
import Essences from './essences';
import Services from './services';



export class Home extends Component {
    state = {
        landingPageData: {},
      }
      getlandingPageData() {
        this.setState({landingPageData : JsonData})
      }
    
      componentDidMount() {
        this.getlandingPageData();
        window.scrollTo(0 , 0);
      }

    render() {
        return (
            <div>
                <Header data={this.state.landingPageData.Header}/>
                <Essences/>
                <Services data={this.state.landingPageData.Services}/>
            </div>
        )
    }
}

export default Home;
