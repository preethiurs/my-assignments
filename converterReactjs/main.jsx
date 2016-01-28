import React from 'react';
import ReactDOM from 'react-dom';
class Converter extends React.Component {
constructor() {
super();
this.state = {
value1: '',
value2: '',
swap: false
}
this.converter = this.converter.bind(this);
this.swap = this.swap.bind(this);
}
swap(e) {
this.setState({
value1: this.state.value2,
value2: this.state.value1,
swap: !this.state.swap
});
}
converter(e) {
if (!this.state.swap) {
let value1 = ReactDOM.findDOMNode(this.refs.from).value;
this.setState({
value2: value1 * this.props.multiplier,
value1: value1
});
} else {
let value1 = ReactDOM.findDOMNode(this.refs.from).value;
this.setState({
value2: value1 / this.props.multiplier,
    value1: value1
});
}
}
render() {
return <div >
< lable > {this.state.swap ? this.props.to : this.props.from}</lable>
< input type = "text" ref = "from" onChange = {this.converter} value = {this.state.value1}/>
< lable > {this.state.swap ? this.props.from : this.props.to} < /lable>
< input type = "text" ref = "to" onChange = {this.converter} value = {this.state.value2} readOnly = "true" / >
< Button swap = {this.swap}/>
< /div>
}
}
class Button extends React.Component {
render() {
return <button onClick = {this.props.swap} > Switch < /button>
}
}

ReactDOM.render( < Converter from = "kilometer" to = "Miles" multiplier = "0.62137" > < /Converter>, document.getElementById('app'));