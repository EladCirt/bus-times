import React, {Component} from 'react';
import './App.css';
import Stations from "./ui/Stations";
import Buses from "./ui/Buses";
import BusesTimes from "./ui/BusesTimes";
import {isMobile} from './utils/env'
import classNames from 'classnames';

class App extends Component {

    constructor() {
        super();
        this.isMobile = isMobile();
        this.state = {stationId: null, buses: [], hasKeyboard: false};
    }

    render() {
        const stationChange = (stationId) => {
            this.setState({stationId: stationId, buses: []})
        };
        const busChange = (buses) => {
            this.setState({buses});
        };
        const selectOpened = () => {
            if (this.isMobile) {
                this.setState({hasKeyboard: true});
            }
        };
        const selectClosed = () => {
            if (this.isMobile) {
                this.setState({hasKeyboard: false});
            }
        };
        const headerClasses = classNames('App-header', {'App-header-shrink': this.state.hasKeyboard});
        const introClasses = classNames('App-intro', {'App-intro-shrink': this.state.hasKeyboard});
        return (
            <div className="App">
                <header className={headerClasses}>
                    <h1 className="App-title">זמני אוטובוס</h1>
                </header>
                <p className={introClasses}>
                    בחרו תחנה ומספר קו והזמנים יופיעו למטה
                </p>
                <Stations
                    selectedChanged={stationChange}
                    selectOpened={selectOpened}
                    selectClosed={selectClosed}
                />
                <Buses
                    stationId={this.state.stationId}
                    selectedChange={busChange}
                    selectOpened={selectOpened}
                    selectClosed={selectClosed}
                />
                {
                    this.state.buses.map(bus => {
                            return <BusesTimes key={bus.id} stationId={this.state.stationId} busId={bus.value} busNumber={bus.label}/>
                    })
                }
            </div>
        );
    }
}

export default App;
