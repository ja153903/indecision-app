'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Stateless functional components should be used when you can
// most of the time you really don't really need to use a class

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            title: 'Indecision',
            subtitle: 'Put your life in the hands of a computer',
            options: []
        };
        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.handleAddOptions = _this.handleAddOptions.bind(_this);
        _this.handleRandomOptions = _this.handleRandomOptions.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'handleAddOptions',
        value: function handleAddOptions(option) {
            this.setState(function (prevState) {
                return {
                    options: [].concat(_toConsumableArray(prevState.options), [option])
                };
            });
        }
    }, {
        key: 'handleRandomOptions',
        value: function handleRandomOptions() {
            if (this.state.options.length > 0) alert(this.state.options[Math.floor(Math.random() * this.state.options.length)]);
        }
    }, {
        key: 'render',
        value: function render() {

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.state.title, subtitle: this.state.subtitle }),
                React.createElement(Action, {
                    handlePick: this.handleRandomOptions,
                    hasOptions: this.state.options.length == 0
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOptions, { onFormSubmit: this.handleAddOptions })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        React.createElement(
            'h2',
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                disabled: props.hasOptions,
                onClick: props.handlePick },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        'Here are your options',
        React.createElement(
            'ol',
            null,
            props.options.map(function (option, index) {
                return React.createElement(Option, { key: index, options: option });
            })
        ),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        )
    );
};

// Option

var Option = function Option(props) {
    return React.createElement(
        'li',
        null,
        props.options
    );
};

// AddOption

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.handleAddOptions = _this2.handleAddOptions.bind(_this2);
        return _this2;
    }

    _createClass(AddOptions, [{
        key: 'handleAddOptions',
        value: function handleAddOptions(event) {
            event.preventDefault();
            var newOption = event.target.elements.option.value.trim();

            if (newOption) {
                this.props.onFormSubmit(newOption);
                event.target.elements.option.value = "";
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'Add an option here',
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOptions },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Submit'
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: </p>
//         </div>
//     );
// };

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById("app"));
