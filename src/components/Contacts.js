import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import '../styles/Contacts.css';


const getProvider = (x, y, z) => `https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/${z}/${x}/${y}.png`;


class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: undefined,
            longitude: undefined,
            geoWorking: false
        };
    }

    render() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    geoWorking: true
                });
            });
        }
        if (this.state.geoWorking) {
            const position = [this.state.latitude, this.state.longitude];
            const PigeonMarkers = <Marker key={`marker_${"We are here!"}`} anchor={position} payload={"We are here!"} onClick={this.onMarkerClick} />;
            return (
                <div id="contacts">
                    <div id="map">
                        <Map
                            defaultCenter={position}
                            defaultZoom={13}
                            provider={getProvider}
                        >
                            {PigeonMarkers}
                        </Map>
                    </div>
                    <div id="restContent">
                        <h3>Contact-telephone: +38-067-271-10-29</h3>
                        <h3>E-mail: manokhin.kpi@gmail.com</h3>
                        <h3>Telegram: @shevdid</h3>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div>
                    <p>Geo not working here!</p>
                    <h3>Contact-telephone: +38-067-271-10-29</h3>
                    <h3>E-mail: manokhin.kpi@gmail.com</h3>
                    <h3>Telegram: @shevdid</h3>
                </div>
            );
        }
    }
}

export default Contacts;