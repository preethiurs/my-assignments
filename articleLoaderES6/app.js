import "./style.css";
import {
    displayArticleMenu, loadArticle, addEventListener, editArticle, map, saveArticle
}
from './article-loader-es6';

window.addEventListener('load', function () {
    loadArticle();
}, false);

document.querySelector(".editclass").addEventListener('click', (event) => {
    editArticle(map.get(event.target.id));

});

document.getElementById("editcancel").addEventListener('click', (event) => {

    document.getElementById("contentEdit").style.display = "none";

});

document.querySelector(".saveclass").addEventListener('click', (event) => {

    saveArticle(map.get(event.target.id));

});