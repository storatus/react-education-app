import React, {Component} from 'react';
import Header from '../Header/Header';
import './App.css';

import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';

class App extends Component {




  // This is just for testing purposes
  // componentDidMount() {
  //   this.callApi().then(res => this.setState({response: res.express})).catch(err => console.log(err));
  // }
  //
  // callApi = async () => {
  //   const response = await fetch('/api/');
  //   const body = await response.json();
  //
  //
  //   if (response.status !== 200)
  //     throw Error(body.message);
  //   return body;
  // }

  render() {
    return (
    // This might change because I have to do things responsive
    <div className="App">
      <Header/>
      <div className="row">
        <Sidebar/>
        <Container/>
      </div>

    </div>)

  }
}

export default App;
