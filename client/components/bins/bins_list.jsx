import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';


class BinsList extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('BinsList willMount.');
    }

    render() {
        console.log('Bins fetched:', this.props.bins);
        return (
            <div>
                Bins List
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('bins');
    return { bins: Bins.find({}).fetch() };
}, BinsList)