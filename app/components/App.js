import React from 'react';
import Form from './form'

class App extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default App;