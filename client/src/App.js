import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

//Importing components
import NavigationBar from "./Components/NavigationBar";
import ShoppingList from "./Components/ShoppingList";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<NavigationBar />
				<ShoppingList />
			</div>
		</Provider>
	);
}

export default App;
