// create your App component here
import React, { useEffect } from 'react';

// export default function App() {
//     useEffect(() => {
//         function fetchItem() {
//             fetch("http://api.open-notify.org/astros.json")
//                 .then(response => response.json())
//                 .then(json => console.log(json))
//         }
//         fetchItem()

//     })
//     return (
//         <div>This isApp</div>
//     )
// }

export default class App extends React.Component {
    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(response => response.json())
            .then(json => console.log(json))
    }

    render() {
        return (
            <div>Hello</div>
        )
    }
}

