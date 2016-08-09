import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';


class BinsEditor extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('BinsEditor willMount.');
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default BinsEditor;