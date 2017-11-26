// import React from "react";
// import { render } from "react-dom";

// import { User } from './components/User';
// import { Main } from './components/Main';

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             username: "Julhas"
//         };
//     }

//     changeUsername(newName) {
//         this.setState({
//             username: newName
//         });
//     }

//     render() {
//         return(
//             <div className="container">
//                 <Main changeUsername = {this.changeUsername.bind(this)}/>
//                 <User username = {this.state.username}/>
//             </div>
//         );
//     }
// }

// render(<App />, window.document.getElementById('app'));

import { createStore } from 'redux';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            state = state + action.payloads;
            break;
        case "SUBSTRACT":
            state = state - action.payloads;
            break;
    }
    return state;
};

const store = createStore(reducer, 1);

store.subscribe(() => {
    console.log("Store updated", store.getState());
});

store.dispatch({
    type: "ADD",
    payloads: 100
});

store.dispatch({
    type: "ADD",
    payloads: 22
});

store.dispatch({
    type: "SUBSTRACT",
    payloads: 80
});