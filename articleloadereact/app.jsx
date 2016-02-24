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
    }

    getArticleContent(e) {
        this.refs.contentref.loadArtcile(e.target.getAttribute('id'));
    }

    componentWillMount() {
        this.props.dispatch(getArticleDetails());
    }

    render() {
        return <div>
            <h1 id="title">Article Loader</h1>
            <LeftPanel onclick={this.getArticleContent} contents={this.props.state}/>
            <Content ref="contentref" contents={this.props}/>
        </div>;
    }
}
function mapStateToProps(state) {
    return {state};
};
function mapDispatchToProps(dispatch) {
    return {dispatch: dispatch}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);



