import React from "react";
import * as Actions from "./actions.jsx";
import {store} from "./store.jsx";
import LeftPanel from "./leftpanel.jsx";
import Content from "./contents.jsx";
import {connect} from "react-redux";
const {getArticleDetails}=Actions;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
        this.getArticleContent = this.getArticleContent.bind(this);
        this.state = {currentobject: null};
    }

    getArticleContent(e) {
        var data = this.props.state;
        for (var key in data) {
            if (data[key].articleId === e.target.getAttribute('id')) {
                this.setState({currentobject: data[key]});
            }
        }
    }

    componentWillMount() {
        this.props.dispatch(getArticleDetails());
    }

    render() {
        return <div>
            <h1 id="title">Article Loader</h1>
            <LeftPanel onclick={this.getArticleContent} contents={this.props.state}/>
            <Content ref="contentref" contents={this.state.currentobject}/>
        </div>;
    }
}
export function mapStateToProps(state) {
    return {state};
};
export function mapDispatchToProps(dispatch) {
    return {dispatch: dispatch}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



