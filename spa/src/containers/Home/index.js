import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';

import "antd/lib/index.css";
import { Button } from 'antd';


export class Home extends Component {
  render() {
    return (
      <div>
            <h1>我是首页哦哦哦</h1>
            <Button type="primary" size="large">大号按钮</Button>
            <Link to="/home/test" >测试页面</Link>
            <br/>
            <Link to="/home/no">未找到的页面</Link>
      </div>
    );
  }
}
