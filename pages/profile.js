import React, { Component } from 'react';
import MainLayout from "../layouts/MainLayout";

class profile extends Component {
  constructor(props){
    super(props);
    this.state= {}
  }

  render() {
    return (
      <div>Profileeeee</div>
    )
  }
}

profile.Layout = MainLayout;

export default profile;