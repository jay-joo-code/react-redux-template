import React from 'react';
import { connect } from 'react-redux';
// import { increment } from 'src/redux/actions/counter';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Template from 'src/components/Template';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' component={Template} />
                </Switch>
            </BrowserRouter>
            )
    }
}

export default connect(null, {  })(App);
