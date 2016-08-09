import React, {Component} from 'react';
import Accounts from './accounts';


class Header extends Component {

    constructor(props) {
        super(props);

        this.onBinClick = this.onBinClick.bind(this);
    }

    componentWillMount() {
        console.log('Header willMount.');
    }

    onBinClick(event) {
        event.preventDefault();

        Meteor.call('bins.insert');
    }

    render() {
        return (
            <nav className="nav navbar-default">

                <div className="navbar-header">
                    <a className="navbar-brand">Markbin</a>
                </div>

                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>
                    <li>
                        <a href="#" onClick={this.onBinClick}>Create Bin</a>
                    </li>
                </ul>

            </nav>
        );
    }
}

export default Header;