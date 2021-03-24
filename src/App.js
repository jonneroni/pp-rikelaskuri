import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";

import rikeData from "./data/rikkeet.json";
import sakkoData from "./data/sakot.json";
import sakkoData2 from "./data/sakot2.json";
import tuomioData from "./data/tuomiot.json";

function App() {
	sakkoData2.forEach((element) => {
		console.log(element);
	});

	const [keyword, setKeyword] = useState("");
	let listData = [];

	let filteredSakkodata = sakkoData2.filter((item) => {
		return item.kategoria.toLowerCase().includes(keyword.toLowerCase());
	});

	keyword ? (listData = filteredSakkodata) : (listData = sakkoData2);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* <Counter /> */}
				<input
					type="text"
					id="header-search"
					placeholder="Etsi..."
					onChange={(e) => setKeyword(e.target.value)}
					value={keyword}
				/>

				<ul>
					{listData.map((item) => (
						<li key={item.kategoria}>{item.kategoria}</li>
					))}
				</ul>
			</header>
		</div>
	);
}

export default App;
