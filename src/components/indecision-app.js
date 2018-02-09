import React, { Component } from 'react';

import AddOption from './add-option';
import Options from './options';
import Action from './action';
import Header from './header';
import OptionModal from './option-modal';

class IndecisionApp extends React.Component {

    state = {
        title: 'Indecision',
        subtitle: 'Put your life in the hands of a computer',
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => {
            return {
                options: prevState.options.filter((option) => {
                    return optionToRemove !== option;
                })
            }
        })
    }

    handleAddOptions = (option) => {
        this.setState((prevState) => {
            return {
                options: [...prevState.options, option]
            }
        })
    }

    handleRandomOptions = () => {
        this.setState((prevState) => {
            return {
                selectedOption: this.state.options[Math.floor(Math.random() * this.state.options.length)]
            }
        })
    }

    handleClearSelectedOption = () => {
        this.setState((prevState) => {
            return {
                selectedOption: undefined
            }
        });
    }


    // This gets called internally when the component mounts to DOM
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options)
                this.setState(() => ({ options }));
        } catch (e) {
            console.log(e);
        }
    }

    // This gets called interally when you expect the component to get mounted to the DOM
    componentWillMount() {
        console.log('componentWillMount')
    }

    // This gets called when something in the component changes
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    // This gets called when something does go away
    // you will get this when you switch from page to page for example
    componentWillUnmount() {
        console.log('componentWillUnmount');
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption  onFormSubmit={this.handleAddOptions}/>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp;