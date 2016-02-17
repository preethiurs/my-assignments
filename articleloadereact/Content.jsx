import React from "react";
class Content extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
        this.state = {articleid: '', articleTitle: '', articleBody: '', contentarea: false, editarea: false};
    }

    editArticle() {
        this.setState({editarea: true, contentarea: false});
    }

    save() {
        var articleId = document.getElementById("articleid").value;
        var articletitle = document.getElementById("articletitle").value;
        var articleBody = document.getElementById("articlebody").value;
        this.props.contents.dispatch({
            type: 'update',
            articleId: articleId,
            articletitle: articletitle,
            articleBody: articleBody
        });
        this.setState({editarea: false});
        alert("Data has been saved successfully");
    }

    cancel() {
        var r = confirm("You have unsaved changes .. do you want to continue ?? ");
        if (r == true) {
            this.setState({editarea: false});
        }
    }

    componentDidMount() {
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onChangeInput(e) {
        this.setState({articleTitle: e.target.value});
    }

    onChangeTextArea(e) {
        this.setState({articleBody: e.target.value});
    }

    loadArtcile(articleId) {
        const props = this.props;
        const {store} = this.context;
        const state = store.getState();
        this.setState({contentarea: true, editarea: false});
        var obj = state.map((articles) => {
            if (articles.articleId == articleId) {
                this.setState({
                    articleid: articles.articleId,
                    articleTitle: articles.articleTitle,
                    articleBody: articles.articleBody,
                    editbtn: true
                });
                return articles;
            }
        })
    }

    render() {
        const props = this.props;
        const {store} = this.context;
        const state = store.getState();
        var contentarea, editarea;
        if (this.state.contentarea) {
            contentarea = < div id="article">
                < h2 id="articleTitle">{this.state.articleTitle}</h2>
                < p id="articleBody">{ this.state.articleBody} </p>

                <Button value="Edit" click={this.editArticle.bind(this)}/></div>;
        }
        if (this.state.editarea) {
            editarea = <div>
                <input type="hidden" value={this.state.articleid} id="articleid"/>
                <input type="text" value={this.state.articleTitle} id="articletitle"
                       onChange={this.onChangeInput.bind(this)}/><br/>
                <textarea rows="4" cols="100" value={this.state.articleBody} onChange={this.onChangeTextArea.bind(this)}
                          id="articlebody"></textarea><br/><br/>
                <Button value="Save" click={this.save.bind(this)}/>
                <Button value="Cancel" click={this.cancel.bind(this)}/>

            </div>
        }
        return (<div id="container">

            {contentarea}
            {editarea}
            <div id="footer">
                <p> Copyright &copy; Article Loader Inc. </p>
            </div>
        </div>);
    }
}
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
    }

    render() {
        return <button className="button" onClick={this.props.click}>{this.props.value}</button>;
    }
}
export default Button;
export default Content;