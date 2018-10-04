import React, { Component } from 'react';
import './Color.scss';

class Color extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstColor: '#e66465',
            secondColor: '#9198e5'
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChangeFirst = this.handleChangeFirst.bind(this);
        this.handleChangeSecond = this.handleChangeSecond.bind(this);
    }

    handleClick() {
        this.props.onGo(this.state);
    }

    handleChangeFirst(event) {
        this.setState({ firstColor: event.target.value })
    }

    handleChangeSecond(event) {
        this.setState({ secondColor: event.target.value })
    }

    render() {
        return (
            <div>
                    <form className="Colors">
                        <input type="text" value={this.state.firstColor} pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" onChange={this.handleChangeFirst}></input>
                        <input type="text" value={this.state.secondColor} pattern="^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$" onChange={this.handleChangeSecond}></input>
                    </form>
                    <button onClick={this.handleClick}>Go</button>
            </div>
        );
    }
}

export default Color;
