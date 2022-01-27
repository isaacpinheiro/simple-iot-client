import React from 'react';

class App extends React.Component {

    constructor() {

        super();

        this.state = {
            devices: [],
        };

        this.request = this.request.bind(this);

    }

    request() {

        fetch("/v2/entities", {
            method: "GET"
        })
        .then(response => response.json())
        .then(responseJson => {

            this.setState({ devices: responseJson });

        });

    }

    componentDidMount() {
        setInterval(this.request, 5000);
    }

    render() {
        return (
            <div>
                <h1>Simple IoT Client</h1>
                <br />
                { this.state.devices.map(function(device, item) {
                    return (<p>
                        { item + 1 }<span> - </span>
                        <b>Device:</b> { device.id },<span> </span>
                        <b>Data:</b> { device.data.value },<span> </span>
                        <b>Data Type:</b> { device.data.type }
                    </p>)}) }
            </div>
        );
    }

}

export default App;

