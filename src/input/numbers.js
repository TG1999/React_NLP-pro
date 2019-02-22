import React, { Component } from 'react'

export class input extends Component {
    stylingbtn={
        backgroundColor:'red',
    }
    state={
        text:''
    }
    change=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        this.props.change(e.target.value);
    }
    onSubmit=(e)=>{
        e.preventDefault();
        this.setState({
          text:''
        })
      }
    render() {
    return (
      <div>
          <h1 style={{color:'#576A6E'}}>{this.props.children}</h1>
      <form onSubmit={this.onSubmit} >
        <input autoComplete='off'  name='text' type='text' style={{width:'20%',height:'20%',fontSize:'14pt',borderColor:'black',borderStyle:'solid'}} value={this.state.text} onChange={this.change}>
        </input>
        </form>
      </div>
    )
  }
}

export default input
