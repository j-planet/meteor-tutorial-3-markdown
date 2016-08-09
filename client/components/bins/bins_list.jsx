import React, {Component} from 'react';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

import { Bins } from '../../../imports/collections/bins';


class BinsList extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('BinsList willMount.');
    }

    onBinRemove(bin) {
        Meteor.call('bins.remove', bin);
    }

    renderList() {
        return this.props.bins.map(bin => {

            const url = `/bins/${bin._id}`;

            return (
                <li className="list-group-item" key={bin._id} >

                    <Link to={url}> Bin {bin._id} {bin.ownerId} </Link>

                    <span className="pull-right">
                        <button
                            className="btn btn-danger"
                            onClick={() => this.onBinRemove(bin)}
                        >
                            Remove
                        </button>
                    </span>
                </li>
            );
        });
    }

    render() {
        console.log('Bins fetched:', this.props.bins);
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('bins');
    return { bins: Bins.find({}).fetch() };
}, BinsList)
