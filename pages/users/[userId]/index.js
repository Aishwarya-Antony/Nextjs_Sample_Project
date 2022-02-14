import next from 'next';
import React, { Component } from 'react';
import { withRouter } from "next/router";


 class userDeatils extends Component {
  constructor(props){
    super(props);
    this.state= {}
  }

  render() {    
    let userId = this.props.router.query.userId;
    return (
      <div>user details {userId}</div>
    )
  }
}

export default withRouter(userDeatils)