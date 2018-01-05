// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
    
//     ReactDOM.render(templateTwo, document.getElementById("app"));
// }

// renderCounterApp();

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: props.count
        }
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
    }

    addOne() {
        this.setState( prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }

    minusOne() {
        this.setState( prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    reset() {
        this.setState( prevState => {
            return {
                count: this.props.count
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={4}/>, document.getElementById("app"));