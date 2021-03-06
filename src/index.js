import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from "./redux/state";


let rerenderEntireTree = (state) => {
	ReactDOM.render(<BrowserRouter BrowserRouter>
		<App state={state} addPost={store.addPost.bind(store)} updateNewPost={store.updateNewPost.bind(store)} />
	</BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscride(rerenderEntireTree)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
