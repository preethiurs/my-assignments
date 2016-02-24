import React from "react";
import ReactDOM from "react-dom";
import {App,store} from "./App.jsx";
import {Provider} from "react-redux";



ReactDOM.render(<Provider store={store}><App/></Provider>,
    document.getElementById('app')
);