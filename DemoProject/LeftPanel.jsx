import React from "react";
import Content from "./Content.jsx";
import {connect} from "react-redux";
import {store} from './container.jsx';
export default class LeftPanel extends React.Component {
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

     console.log("Left panel");
    }



    componentDidMount() {
        console.log("component didi mount leftpanel");
        const {store} = this.context;
        console.log("store in left panel" ,store);
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }



    render() {
        return <div>
            <div id="leftpanel">
                <ul>
                    {
                        this.props.value.map((articles) => {
                            return (
                                <li id={articles.articleId} key={articles.articleId} onClick={this.props.onclick}>
                                    {articles.articleTitle}
                                </li>);
                        })
                    }
                </ul>
            </div>
        </div>
    }
}

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LeftPanel);

