import React, { useState } from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Collapsible from "react-collapsible";

import styled from "styled-components";

import rikeData from "./data/rikkeet.json";
import sakkoData from "./data/sakot.json";
import sakkoData2 from "./data/sakot2.json";
import tuomioData from "./data/tuomiot.json";

function App() {
	sakkoData2.forEach((element) => {
		console.log(element);
	});

	const WrapperDiv = styled.div`
		/* background-color: red; */
		/* flex: 1; */
		border: 5px solid blue;
		margin: 30px 0;
		height: 75%;
		width: 90%;
		position: fixed;
		overflow: auto;
		/**
   * Overwrite the contentInner padding + border
   * to ensure zero height.
   */
	`;

	const StyledP = styled.p`
		margin: 5% 0;
		padding: 0;
		border: 5px solid green;
	`;

	const [keyword, setKeyword] = useState("");
	let listData = [];

	let filteredSakkodata = sakkoData2.filter((item) => {
		return item.kategoria.toLowerCase().includes(keyword.toLowerCase());
	});

	keyword ? (listData = filteredSakkodata) : (listData = sakkoData2);

	return (
		<div className="App">
			<header className="App-header">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}
				{/* <Counter /> */}
				<input
					type="text"
					id="header-search"
					placeholder="Etsi..."
					onChange={(e) => setKeyword(e.target.value)}
					value={keyword}
				/>
				<WrapperDiv>
					{listData.map((item) => (
						<Collapsible
							key={item.kategoria}
							trigger={item.kategoria}
							triggerStyle={{ backgroundColor: "cyan", textAlign: "left" }}
							contentInnerClassName="CustomInnerContentCSS"
							triggerClassName="CustomTriggerCSS"
							overflowWhenOpen="auto"
						>
							{item.rikkeet.map((rike) => (
								<StyledP>{`${rike.nimike} = ${rike.sakko}€`}</StyledP>
							))}
						</Collapsible>
					))}
				</WrapperDiv>
				{/* <ul>
					{listData.map((item) => (
						<li key={item.kategoria}>{item.kategoria}</li>
					))}
				</ul> */}
			</header>
		</div>
	);
}

export default App;
