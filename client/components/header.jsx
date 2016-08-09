import React, {Component} from 'react';
import { Link, browserHistory } from 'react-router';
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

        Meteor.call('bins.insert',
            (error, binId) => {
                browserHistory.push(`/bins/${binId}`);
            });
    }

    render() {
        return (
            <nav className="nav navbar-default">

                <div className="navbar-header">
                    <Link to="/" className="navbar-brand">Markbin</Link>
                </div>

                <ul className="nav navbar-nav">
                    <li>
                        <Accounts />
                    </li>

                    <li>
                        <a href="#" onClick={this.onBinClick}>Create Bin</a>
                    </li>

                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                </ul>

            </nav>
        );
    }
}

export default Header;