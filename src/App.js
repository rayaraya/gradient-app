import React, { Component } from 'react';
import './App.scss';
import Color from './Colors';

class App extends Component {
    constructor(props) {
        super(props);
        this.handleGo = this.handleGo.bind(this);
        this.state = { colors: '' };
    }

    handleGo(event) {
        this.setState({ colors: event });
        document.getElementById('app').style.cssText =  `background: linear-gradient(${event.firstColor}, ${event.secondColor});`
        console.log(event);
        console.log(document.getElementById('app').style.cssText);
    }
    render() {
        return (
            <div className="App">
                
                <div className="App-header" id="app">
                <div className="border">
                    <p>
                        Gradient app
                    </p>
                    <Color onGo={this.handleGo} />
                </div>
                </div>
            </div>
        );
    }
}

export default App;
