import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';


class Accounts extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('Accounts willMount.');
    }

    componentDidMount() {
        // render the Blaze accounts form, then render.
        this.view = Blaze.render(
            Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.container)
        );
    }

    componentWillUnmount() {
        // Destroy the forms we MANUALLY added
        Blaze.remove(this.view);
    }

    render() {
        return (
            <div ref="container">
            </div>
        );
    }
}

export default Accounts;