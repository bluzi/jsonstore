import React from 'react';
import AppService from './../services/appService';

class EndpointControls extends React.Component {
    state = {
        loading: true
    }
    
    async componentWillMount() {
        const appService = new AppService();

        this.setState({
            loading: false,
            link: await appService.getLink(),
        })
    }
    
    copyUrl() {
        this.refs.urlInput.select();
        document.execCommand('copy');
    }

    componentDidMount() {
        this.refs.urlInput.select();
    }

    render() {
        return (<header>
            <div className="container">
                <div className="endpoint-controls">
                    <h1>This Is Your Endpoint</h1>

                    <div className="row">
                        <div className="column column-60">
                            <input ref="urlInput" type="text" value={this.state.loading ? 'Loading...' : this.state.link} readOnly />
                        </div>

                        <div className="column">
                            <button onClick={this.copyUrl.bind(this)}>Copy</button>
                        </div>
                        <div className="column">
                            <button className="button-outline" ref="dashboardButton" disabled>Dashboard</button>
                        </div>
                    </div>
                </div>

                <div className="instructions">
                    Send
                    <h3 className="inline">POST</h3> requests to store data,
                    <h3 className="inline">PUT</h3> and
                    <h3 className="inline">DELETE</h3> requests to modify or delete data, and
                    <h3 className="inline">GET</h3> requests to fetch data.
                </div>
            </div>
        </header>);
    }
}


export default EndpointControls;