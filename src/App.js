import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'

class App extends Component {
  render(){
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Dashboard/>
        <Form />
        <Header />
      </div>
    )
  }
 
}

export default App;
//REMEMBER TO ADD PORT TO SERVER.JS