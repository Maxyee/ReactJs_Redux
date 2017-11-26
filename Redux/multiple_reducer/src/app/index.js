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

import { createStore, combineReducers } from 'redux';



const initialState = {
    result: 1,
    lastValues: [],
    // userName: "Julhas"
};


const mathReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD":
            // state = state + action.payloads;
            //state.result += action.payloads;
            state = {
                ...state,
                result: state.result + action.payloads,
                lastValues: [...state.lastValues, action.payloads]
            };
            //state.lastValues.push(action.payload)
            break;
        case "SUBSTRACT":
            //state = state - action.payloads;
            //state.lastValues -= action.payloads;
            state = {
                ...state,
                result: state.result - action.payloads,
                lastValues: [...state.lastValues, action.payloads]
            };
            //state.lastValues.push(action.payload)
            break;
    }
    return state;
};






const initialState2 = {
    name: "Julhas",
    age: 27
};

const userReducer = (state = initialState2, action) => {
    switch (action.type) {
        case "SET_NAME":
            // state = state + action.payloads;
            //state.result += action.payloads;
            state = {
                ...state,
                name: action.payloads
            };
            //state.lastValues.push(action.payload)
            break;
        case "SET_AGE":
            //state = state - action.payloads;
            //state.lastValues -= action.payloads;
            state = {
                ...state,
                age: action.payloads
            };
            //state.lastValues.push(action.payload)
            break;
    }
    return state;
};




const store = createStore(combineReducers({ mathReducer, userReducer }));

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

store.dispatch({
    type: "SET_AGE",
    payloads: 30
});