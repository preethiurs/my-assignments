import React from "react";
import ReactDOM from "react-dom";
import LeftPanel from "./LeftPanel.jsx";
import {createStore} from "redux";
import {connect, Provider} from "react-redux";
import Content from "./Content.jsx";
import store from "./container.jsx";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
        this.getArticleContent = this.getArticleContent.bind(this);
    }

    getArticleContent(e) {
        console.log("get article function");
        this.refs.contentref.loadArtcile();
    }

    render() {
        return <div>
            <h1 id="title" onClick={this.getArticleContent}>Article Loader</h1>
            <LeftPanel onclick={this.getArticleContent}/>
            <Content ref="contentref" contents={store}/>
           </div>;
    }
}

