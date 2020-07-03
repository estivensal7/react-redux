import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import { Container } from "reactstrap";

//Importing components
import NavigationBar from "./Components/NavigationBar";
import ShoppingList from "./Components/ShoppingList";
import ItemModal from "./Components//ItemModal";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<NavigationBar />
				<Container>
					<ItemModal />
					<ShoppingList />
				</Container>
			</div>
		</Provider>
	);
}

export default App;
