import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './header';


class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('App willMount.');
    }

    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default App;