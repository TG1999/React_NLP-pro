import React, { Component } from 'react'
import Back from './img.jpeg'
export class aside extends Component {
  styling=
    {
        float:'left',
        height:'100%',
        width:'33%',
        position:'fixed',
        // marginTop:'10px',
        // zIndex:'1',
       left:'0',
       overflowX:'hidden',
       paddingTop:'20px',
       backgroundImage:`url(${Back})`,
       color:'black'
    }
    render() {
    return (
      <div style={{...this.styling}}> 
      <b>hi this is me</b>
      </div>
    )
  }
}

export default aside

