"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            title: "React App",
            subTitle: "Subtitle",
            options: ["Seb", "Kimi"]
        };
        _this.handleWhatToDo = _this.handleWhatToDo.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.state.title, subTitle: this.state.subTitle }),
                React.createElement(Action, { handleWhatToDo: this.handleWhatToDo, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { handleRemoveOption: this.handleRemoveOption, options: this.state.options }),
                React.createElement(InputForm, { handleAddOption: this.handleAddOption })
            );
        }
    }, {
        key: "handleWhatToDo",
        value: function handleWhatToDo() {
            alert(this.state.options[1]);
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(newOption) {
            if (!newOption) {
                return "Please select atleast one option";
            }
            if (this.state.options.indexOf(newOption) > -1) {
                return "Option already exists";
            }

            if (newOption) {
                this.setState(function (prevState) {
                    return { options: prevState.options.concat(newOption) };
                });
            }
        }
    }, {
        key: "handleRemoveOption",
        value: function handleRemoveOption(selectedOption) {
            this.setState(function (prevState) {
                return { options: prevState.options.filter(function (item) {
                        return item != selectedOption;
                    }) };
            });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            console.log("Component did mount!");
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h3",
            null,
            props.subTitle
        )
    );
};

Header.defaultProps = {
    title: "Indecision Default"
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasOptions, onClick: props.handleWhatToDo },
            "What Should i Do?"
        ),
        React.createElement(
            "button",
            null,
            "Remove All"
        )
    );
};

var Options = function Options(props) {
    return props.options.map(function (item) {
        return React.createElement(Option, { handleRemoveOption: props.handleRemoveOption, key: item, option: item });
    });
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "span",
            null,
            props.option
        ),
        " ",
        React.createElement(
            "button",
            { onClick: function onClick() {
                    props.handleRemoveOption(props.option);
                } },
            "X"
        ),
        " "
    );
};

var InputForm = function (_React$Component2) {
    _inherits(InputForm, _React$Component2);

    function InputForm(props) {
        _classCallCheck(this, InputForm);

        var _this2 = _possibleConstructorReturn(this, (InputForm.__proto__ || Object.getPrototypeOf(InputForm)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(InputForm, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleAddOption },
                    React.createElement("input", { name: "addOption", type: "text" }),
                    React.createElement(
                        "button",
                        null,
                        "Add Option"
                    )
                )
            );
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(e) {
            e.preventDefault();
            var option = e.target.elements.addOption.value;
            var error = this.props.handleAddOption(option);
            if (error) {
                this.setState(function () {
                    return { error: error };
                });
            }
        }
    }]);

    return InputForm;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
