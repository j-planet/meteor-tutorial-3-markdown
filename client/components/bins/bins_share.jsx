import React, {Component} from 'react';


class BinsShare extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('BinsShare willMount.');
    }

    onShareClick() {
        const email = this.refs.email.value;
        Meteor.call('bins.share', this.props.bin, email);
        this.refs.email.value='';
    }

    renderShareList() {
        const emails = this.props.bin.sharedWidth;

        if (!emails) return <div>Not shared with anyone.</div>;

        return emails.map(email => {
            return (
                <button
                    key={email}
                    className="btn btn-default"
                >
                    {email}
                </button>
            );
        });
    }

    render() {
        if (!this.props.bin) return <div>Loading...</div>;

        return (
            <footer className="bins-share">
                <div className="input-group">

                    <input ref="email" className="form-control" />

                    <div className="input-group-btn">
                        <button
                            onClick={this.onShareClick.bind(this)}
                            className="btn btn-default"
                        >
                            Share Bin
                        </button>
                    </div>

                </div>

                <div>
                    Shared with:
                </div>

                <div className="btn-group">
                    {this.renderShareList()}
                </div>
            </footer>
        );
    }
}

export default BinsShare;