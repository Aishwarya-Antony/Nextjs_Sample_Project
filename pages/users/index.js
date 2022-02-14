import React, { Component } from 'react';
import Link from 'next/link'

export default class user extends Component {
  constructor(props){
    super(props);
    this.state= {}
  }

  render() {
    return (
      <div>
        <Link href={"/users/1"}>
        <a>User Details 1</a>
        </Link>
        <Link href={"/users/2"}>
        <a>User Details 2</a>
        </Link>
        <Link href={"/users/3"}>
        <a>User Details 3</a>
        </Link>
        </div>
    )
  }
}