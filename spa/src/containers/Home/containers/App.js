import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom';
import { Router, Route, Link } from 'react-router';
import "antd/lib/index.css";
import { Button } from 'antd';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions'

class App extends Component {
    render() {
        const { todos, actions } = this.props
        return (
            <div>
                <h1>我是首页是哦哦哦</h1>
                <Button type="primary" size="large">大号按钮</Button>
                <Link to="/home/test" >测试页面</Link>
                <br/>
                <Link to="/home/no">未找到的页面</Link>
                <Header addTodo={actions.addTodo} />
                <MainSection todos={todos} actions={actions} />
            </div>
        )
    }
}

App.propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(TodoActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
