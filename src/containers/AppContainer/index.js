import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './index.less';

class AppContainer extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        const { children } = this.props;
        return (
            <div className="app-container">
                <div className="header">
                    <Link to="/">home</Link>
                    <Link to="/detail">detail</Link>
                    <Link to="/abcdefg">404</Link>
                </div>
                {children}
            </div>
        );
    }
}

export default connect((state) => ({ store: state }))(AppContainer);
