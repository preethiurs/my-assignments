import React from 'react';
import ReactDOM from 'react-dom';
import LeftPanel from './LeftPanel.js';
import { createStore } from 'redux';
import {connect, Provider} from 'react-redux';
import Content from './Content.js';
class  App extends React.Component {
constructor(props) {
super(props);
this.displayName = '';
}
render() {
return <div>
	<h1 id="title">Article Loader</h1>
	
	<Provider store={store}>
		<LeftPanelContainer />
	</Provider>
	
</div>;
}
}
const loadArticleList = (state=[],action) =>
{

switch (action.type) {
case 'update':
var articleList=state.map((articles) =>{
if(articles.articleId==action.articleId )
{
articles.articleTitle=action.articletitle;
articles.articleBody=action.articleBody;

}
return articles;


})
return articleList;

default :
let jsonObj=null;
let that=this;
let data_file = "./ArtcileList.json";
let http_request =  new XMLHttpRequest();
http_request.onreadystatechange = function()
{
if (http_request.readyState == 4)
{
jsonObj = JSON.parse(http_request.responseText);

}
}
http_request.open("GET", data_file, false);
http_request.send();
return jsonObj;
}
};
const store = createStore(loadArticleList);
const mapStateToProps=(state) =>
{
return{
value : store.getState()
};
};
const mapDispatchToProps = (dispatch) =>
{
return {
update : () =>
store.dispatch({
type : '',


})
}
}
const LeftPanelContainer = connect(
mapStateToProps,
mapDispatchToProps
)(LeftPanel);
LeftPanel.contextTypes = {
store: React.PropTypes.object
};
Content.contextTypes = {
store: React.PropTypes.object
};
ReactDOM.render(<App /> ,document.getElementById('app'));