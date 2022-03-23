import PropTypes from 'prop-types';
import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color : "black"
        }
    }
    change(colors) {
        let color = colors[Math.floor(Math.random() * colors.length)];
        this.setState({color:color});
    }
    render() {
        return (
        <div>
            <h2 style={{color:this.state.color}}>Hello {this.props.name}</h2>
            <button onClick={() => this.change(this.props.colors)}>change</button>
        </div>
        )
    }
}

Welcome.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Welcome;