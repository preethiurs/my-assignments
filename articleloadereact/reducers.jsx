export function loadArticleList(state = [], action) {
    switch (action.type) {
        case 'update':
            return state.map((articles) => {
                if (articles.articleId == action.articleId) {
                    articles.articleTitle = action.articletitle;
                    articles.articleBody = action.articleBody;
                }
                return articles;
            });
        case  'RECEIVE_DATA':
            return action.data;
        default :
            return state
    }
};
