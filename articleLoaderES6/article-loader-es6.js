export var map;

export function displayArticleMenu(input) {
    document.getElementById("contentEdit").style.display = "none";
    document.getElementById("contentDisplay").style.display = "none";
    document.getElementById("leftpanel").innerHTML = "";
    for (var [key, value] of input.entries()) {
        var a = document.createElement('a');
        var t = document.createTextNode(value.name);
        a.appendChild(t);
        a.setAttribute('href', '#');
        a.style.color = "white";
        a.style.fontSize = "36px";
        a.className = "leftpanelclass";
        a.id = value.id;
        a.name = value.name;
        a.onclick = function () {
            loadContent(this.id)
        };
        var list = document.createElement('li');
        list.appendChild(a);
        var element = document.getElementById("leftpanel");
        element.appendChild(list);
    }
}


export function loadArticle() {
    var myArr;
    map = new Map();
    var xmlhttp = new XMLHttpRequest();
    var url = "./content.json";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            myArr = JSON.parse(xmlhttp.responseText);
            for (var i = 0; i < myArr.length; i++) {
                map.set(myArr[i].id, myArr[i]);
            }
            displayArticleMenu(map);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();


}

function loadContent(id) {

    var edit = document.getElementById("edit");
    document.getElementById("contentDisplay").style.display = "block";
    document.getElementById("contentEdit").style.display = "none";
    document.getElementById("contentHearder").innerHTML = map.get(id).name;
    document.getElementById("contentBody").innerHTML = map.get(id).content;
    document.querySelector(".editclass").id = id;
}

export function editArticle(article) {
    document.getElementById("contentEdit").style.display = "block";
    document.getElementById("editTitle").value = article.name;
    document.getElementById("editDescription").value = article.content;
    document.getElementById("contentDisplay").style.display = "none";
    document.querySelector(".saveclass").id = article.id;


}


export function saveArticle(article) {
    article.name = document.getElementById("editTitle").value;
    article.content = document.getElementById("editDescription").value;
    map.set(article.id, article);
    document.getElementById("contentEdit").style.display = "none";
    displayArticleMenu(map);
    loadContent(article.id);

}