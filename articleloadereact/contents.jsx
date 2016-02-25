import React from "react";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./app.jsx";
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
        this.props.dispatch({
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

    onChangeInput(e) {
        this.setState({articleTitle: e.target.value});
    }

    onChangeTextArea(e) {
        this.setState({articleBody: e.target.value});
    }

    componentWillReceiveProps(props) {
        console.log("component will recieve props ", props.contents);
        if (props.contents) {
            this.setState({
                articleid: props.contents.articleId,
                articleTitle: props.contents.articleTitle,
                articleBody: props.contents.articleBody,
                editbtn: true,
                contentarea: true
            });
        }
    }

    render() {
        var contentarea, editarea;
        if (this.state.contentarea) {
            console.log("inside content render content");
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
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);

