import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision-app';
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

// const Layout = (props) => {
//     return (
//         <div>
//             <p>header</p>
//             {props.content}
//             <p>footer</p>
//         </div>
//     )
// };

// const template = (
//     <div>
//         <h1>Page Title</h1>
//         <p>This is my page</p>
//     </div>
// );

// ReactDOM.render(<Layout content={template}/>, document.getElementById("app"));

// class OldSyntax {
//     constructor() {
//         this.name = "Jaime";
//     } 
// }

// const oldSyntax = new OldSyntax();

// console.log(oldSyntax);

// // ------------

// class NewSyntax {
//     name = "Jaime";
//     getGreeting = () => {
//         return `Hi! My name is ${this.name}`;
//     }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());