import React from "react";
import ReactDOM from "react-dom";
import LeftPanel from "./LeftPanel.jsx";
import {createStore} from "redux";
import Provider from "react-redux";

class App extends React.Component {
    constructor() {
        super();
        console.log("demo1 of constructor");
    }

    render()
    {
     return <div><h1>this is demo1</h1>

     </div>

    }


}
export default App;


const loadArticleList = (state = [], action) => {
    switch (action.type) {
        case 'update':
            return state.map((articles) => {
                if (articles.articleId == action.articleId) {
                    articles.articleTitle = action.articletitle;
                    articles.articleBody = action.articleBody;
                }
                return articles;
            });
        default :
            let jsonObj = null;
            let that = this;
            let data_file = "./ArtcileList.json";
            let http_request = new XMLHttpRequest();
            http_request.onreadystatechange = function () {
                if (http_request.readyState == 4) {
                    jsonObj = JSON.parse(http_request.responseText);
                }
            }
            http_request.open("GET", data_file, false);
            http_request.send();
            return jsonObj;
    }
};
export const store = createStore(loadArticleList);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));