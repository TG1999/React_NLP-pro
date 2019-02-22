import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class header extends Component {
    styleheader={
        backgroundColor:'black',
        color:'white',
        textAlign:'center',
        padding:'10px'
    }
    render() {
    return (
      <div style={this.styleheader}>
          <h1>{this.props.children}</h1>
          <Link style={linkStyle} to="/numberparsing">NUMBER PARSING</Link>|<Link style={linkStyle} to='/about'>ABOUT</Link>
      </div>
    )
  }
}
const linkStyle={
    color:'#fff',
    textDecoration:'none'
  }
export default header
