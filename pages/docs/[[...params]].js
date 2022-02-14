import React, { Component } from 'react';
import { withRouter } from "next/router";

 class docs extends Component {
  constructor(props){
    super(props);
    this.state= {}
  }

  render() {    
    const { params = [] } = this.props.router.query;
    console.log("params====="+params)
    return (
        <div>
            {params.length === 2 ? <h1>Document details category  {params[0]} sub-category {params[1]}</h1>: 
            params.length === 1 ? <h1> Document details category {params[0]}</h1>:
            <h1> Document details Home Screen</h1>}
        </div>        
      
    )
  }
}

export default withRouter(docs)