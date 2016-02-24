import React from "react";
import Content from "./contents.jsx";
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
    }

    render() {
        return <div>
            <div id="leftpanel">
                <ul>
                    {
                        this.props.contents.map((articles) => {
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
LeftPanel.contextTypes = {
    store: React.PropTypes.object
};
Content.contextTypes = {
    store: React.PropTypes.object
};
