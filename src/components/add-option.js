import React, { Component } from 'react';
/*
Note that we can only use this syntax because we added
the transform-class-properties plugin
*/

class AddOption extends Component {
    state = {
        error: undefined
    };

    handleAddOptions = (event) => {
        event.preventDefault();
        const newOption = event.target.elements.option.value.trim();
        const error = this.props.onFormSubmit(newOption);

        this.setState(() => ({ error }));

        if (!error) {
            event.target.elements.option.value = "";
        }
    }

    render() {
        return (
            <div>
                <form className="add-option" onSubmit={this.handleAddOptions}>
                    <input className="add-option__input" type="text" name="option"></input>
                    <button className="button">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddOption;