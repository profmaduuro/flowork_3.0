import React from 'react';
import ReactDOM from 'react-dom';

class LMS extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button>Increment</button>
            </div>
        );
    }
}
export default LMS;