import React from "react";
import {render} from "react-dom";
import App from "./app.jsx";
import {Provider} from "react-redux";
import configureStore from "./store.jsx";
const store = configureStore()
render(<Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));