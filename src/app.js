// Stateless functional components should be used when you can
// most of the time you really don't really need to use a class

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer',
            options: []
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOptions = this.handleAddOptions.bind(this);
        this.handleRandomOptions = this.handleRandomOptions.bind(this);
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handleAddOptions(option) {
        this.setState((prevState) => {
            return {
                options: [...prevState.options, option]
            }
        })
    }

    handleRandomOptions() {
        if (this.state.options.length > 0)
            alert(this.state.options[Math.floor(Math.random() * this.state.options.length)])
    }

    render() {

        return (
            <div>
                <Header title={this.state.title} subtitle={this.state.subtitle}/>
                <Action 
                    handlePick={this.handleRandomOptions}
                    hasOptions={this.state.options.length == 0}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOptions  onFormSubmit={this.handleAddOptions}/>
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

const Action = (props) => {
    return (
        <div>
            <button 
                disabled={props.hasOptions}
                onClick={props.handlePick}>What should I do?</button>
        </div>)
}

const Options = (props) => {
    return (
        <div>
            Here are your options
            <ol>
                {
                    props.options.map((option, index) => <Option key={index} options={option}/>)       
                }
            </ol>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    )
}

// Option

const Option = (props) => {
    return (
        <li>{props.options}</li>
    )
} 

// AddOption
class AddOptions extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOptions = this.handleAddOptions.bind(this);
    }

    handleAddOptions(event) {
        event.preventDefault();
        const newOption = event.target.elements.option.value.trim();
        
        if (newOption) {
            this.props.onFormSubmit(newOption);
            event.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                Add an option here
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
