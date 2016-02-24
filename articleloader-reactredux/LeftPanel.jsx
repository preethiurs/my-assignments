import React from "react";
import Content from "./Content.jsx";
import {connect} from "react-redux";
import {store} from "./App.jsx";
class LeftPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articleList: [
                {
                    articleId: '',
                    articleTitle: ''
                }
            ]
        }
        this.getArticleContent = this.getArticleContent.bind(this);
    }

    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    getArticleContent(e) {
        this.refs.contentref.loadArtcile(e.target.getAttribute('id'));
    }

    render() {
        return <div>
            <div id="leftpanel">
                <ul>
                    {
                        this.props.value.map((articles) => {
                            return (
                                <li id={articles.articleId} key={articles.articleId} onClick={this.getArticleContent}>
                                    {articles.articleTitle}
                                </li>);
                        })
                    }
                </ul>
            </div>
            <Content ref="contentref" contents={store}/></div>
    }
}
export default LeftPanel
function mapStateToProps(state) {
    return {
        value: store.getState()
    };
};
function mapDispatchToProps(dispatch) {
    return {
        update: () =>
            store.dispatch({
                type: '',
            })
    }
}
LeftPanel.contextTypes = {
    store: React.PropTypes.object
};
Content.contextTypes = {
    store: React.PropTypes.object
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel);