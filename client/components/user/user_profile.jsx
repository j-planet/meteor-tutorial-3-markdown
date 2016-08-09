import React, {Component} from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';



class UserProfile extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('UserProfile willMount.');
    }

    render() {
        if (!this.props.user) return <div>No user</div>;

        return (
            <div>
                <h3>User Profile </h3>
                Email: { this.props.user.emails[0].address }
            </div>
        );
    }
}


export default createContainer(
    () => {return {user: Meteor.user()};}
    , UserProfile
);