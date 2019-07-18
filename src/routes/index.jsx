import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

const Home = () => (<div>
    <h3>1</h3>
    <Link to="detail">2</Link>
</div>);

const Detail = () => (<div>
    <h3>2</h3>
    <Link to="home">1</Link>
</div>);

const NotFound = () => (<h4>page not found</h4>);


export default class AppRoutes extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/detail" component={Detail} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}
