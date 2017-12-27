class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options} />
                <AddOptions />
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

    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
    }

    handlePick() {
        alert("You clicked it")
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>)
    }
}

// Options
class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        alert('Remove all elements')
    }

    render() {
        return (
            <div>
                Here are your options
                <ol>
                    {
                        this.props.options.map((option, index) => <Option key={index} options={option}/>)       
                    }
                </ol>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        const newOption = event.target.elements.option.value.trim();
        
        if (newOption) {
            alert(newOption);
            event.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                Add an option here
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
