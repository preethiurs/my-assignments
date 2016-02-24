import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {loadArticleList} from "./reducers.jsx";
export default function configureStore(initialState) {
    return createStore(
        loadArticleList,
        initialState,
        applyMiddleware(
            thunk)
    )
}
