import React, {Component} from 'react';
import { markdown } from 'markdown';


class BinsViewer extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('BinsViewer willMount.');
    }

    render() {
        if (!this.props.bin) {
            return <div>Loading...</div>;
        }

        const rawHTML = markdown.toHTML(this.props.bin.content);

        return (
            <div className="col-xs-4">
                <h5>Output for Bin {this.props.bin._id} </h5>
                <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
            </div>
        );
    }
}

export default BinsViewer;