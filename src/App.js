import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './layout/header'
import NumberInput from './input/numbers'
import nlp from 'compromise'
class App extends Component {
  state={
    number:'',
    ntext:''
  }
  NumTextchange=(text)=>{
    // console.log(text);
    var doc=nlp(text);
    var op=doc.values().toText().out();
    console.log(op)
    this.setState({
      number:op
    })
    console.log(this.state.number)
  }
  TextNumchange=(text)=>{
    // console.log(text);
    var doc=nlp(text);
    var op=doc.values().toNumber().out();
    this.setState({
      ntext:op
    })
  }
  render() {
    return (
      <Router>
      <div className='App'>
      <Header>Text Analysis</Header>
      <Route exact path='/numberparsing' render={props=>(
        <React.Fragment>
        <NumberInput change={this.NumTextchange}>Number to Text</NumberInput>
      <div><h1 style={{color:'#25383C'}}>{this.state.number}</h1></div>
      <NumberInput change={this.TextNumchange}>Text to Number</NumberInput>
      <div><h1 style={{color:'#25383C'}}>{this.state.ntext}</h1></div>
        </React.Fragment>
      )} />
      </div>
      </Router>
    );
  }
}

export default App;
