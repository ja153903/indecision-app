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

class Header extends React.Component {

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    disabled={this.props.hasOptions}
                    onClick={this.props.handlePick}>What should I do?</button>
            </div>)
    }
}

// Options
class Options extends React.Component {
    render() {
        return (
            <div>
                Here are your options
                <ol>
                    {
                        this.props.options.map((option, index) => <Option key={index} options={option}/>)       
                    }
                </ol>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            </div>
        )
    }
}

// Option
class Option extends React.Component {
    render() {
        return (
            <li>{this.props.options}</li>
        )
    }
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


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
