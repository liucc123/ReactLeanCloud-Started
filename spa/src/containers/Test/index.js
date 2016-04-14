import React, { Component } from 'react';
import { Link } from 'react-router';


export class Test extends Component {
  render() {
    return (
      <div>
            <h1>test</h1>
           <Link to="/home/no">未找到的页面</Link>
      </div>
    );
  }
}
