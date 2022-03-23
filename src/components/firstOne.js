import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
          () => this.setState({
            date: new Date()
          }),
          1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    render() {
        return (
            <h2>Time is {this.state.date.toLocaleTimeString()}</h2>
        )
    }
}

export default Clock;