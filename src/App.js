import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import data from "./data/rikkeet.json";
import sakkoData from "./data/sakot.json";
import tuomioData from "./data/tuomiot.json";

function App() {
	console.log(data);
	console.log(sakkoData);
	console.log(tuomioData);

	const vanginKarkaaminen = data.rikoksetViranomaistaVastaan.find(
		(e) => e.nimike === "Vangin karkaaminen"
	);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<Counter />
				<p>
					{vanginKarkaaminen.nimike} = {vanginKarkaaminen.sakko}€
				</p>
			</header>
		</div>
	);
}

export default App;
