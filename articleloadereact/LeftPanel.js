import React from 'react';
import Content from './Content.js';
class LeftPanel extends React.Component {
constructor(props) {
super(props);

this.state={
articleList : [
{
articleId: '',
articleTitle : ''

}
]
}
this.getArticleContent=this.getArticleContent.bind(this);

}
componentDidMount()
{
const { store } = this.context;
this.unsubscribe= store.subscribe(() => this.forceUpdate());
}

componentWillUnmount()
{
thi.unsubscribe();
}

getArticleContent(e)
{

this.refs.contentref.loadArtcile(e.target.getAttribute('id'));
}
render() {
const props = this.props;
const { store } = this.context;
const state = store.getState();

return <div><div id="leftpanel">
  <ul>
    {
    this.props.value.map( (articles) =>{
    return (
    <li id={articles.articleId} key={articles.articleId} onClick={this.getArticleContent} >
      {articles.articleTitle}
    </li>);
    
    })
    }
  </ul>
</div>
<Content ref="contentref" contents={store}/></div>
}
}
export default LeftPanel;