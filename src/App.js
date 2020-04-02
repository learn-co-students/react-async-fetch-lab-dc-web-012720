import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>App</div>
        )
    }

    componentDidMount(){
        fetch ('http://api.open-notify.org/astros.json')
        .then (resp => resp.json())
    }
}

export default App