import React from "react";
import "./App.css";

//Importing components
import NavigationBar from "./Components/NavigationBar";
import ShoppingList from "./Components/ShoppingList";

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<ShoppingList />
		</div>
	);
}

export default App;
