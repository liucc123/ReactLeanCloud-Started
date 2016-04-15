import React, { Component } from 'react';
import { Link } from 'react-router';

const metaData = {
  title: '404',
  description: '',
  meta: {
    charset: 'utf-8',
  },
};

export class NotFound extends Component {
  render() {
    return (
      <div>
          <h1>404</h1>
          <Link to="/home/test"> 测试页面 </Link>
          <br />
          <Link to="/"> 首页 </Link>
      </div>
    );
  }
}
