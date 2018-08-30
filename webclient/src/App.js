import React, { Component } from 'react';

import HomePage from './containers/HomePage';
import AppPage from './containers/AppPage';

class App extends Component {
  state = {
    display : 0,
    userId : ''
  }

  display = () => {

    switch (this.state.display) {
      case 1:{
        return <AppPage userId={this.state.userId}/>
      }
   
      default:
      return <HomePage login={this.login} />
    }
  }
  login = (userId) => {
      this.setState({
        userId : userId,
        display : 1
      })
  }  
  render() {
    return (
      <div className="App">
      {this.display()}
      </div>
    );
  }
}

export default App;
