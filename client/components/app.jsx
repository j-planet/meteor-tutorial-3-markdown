import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './header';
import BinsList from './bins/bins_list';


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
                {this.props.children}
            </div>
        );
    }
}

export default App;