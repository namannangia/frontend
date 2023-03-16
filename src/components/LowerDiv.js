import React from "react";
import SearchBar from "./SearchBar";

function LowerDiv(props) {
	return (
		<div style={{ flex: 1, display: "flex", border: "0px solid red" }}>
			<div
				style={{
					flex: 1,
					margin: "2%",
					borderRadius: "8px",
					padding: "10px",
					display: "flex",
					flexDirection: "column",
					border: "2px solid red",
					boxShadow: "0px 0px 5px rgb(180, 180, 180)",
				}}
			>
				<SearchBar />
			</div>
			<div
				style={{
					flex: 1,
					margin: "2%",
					borderRadius: "8px",
					padding: "10px",
					display: "flex",
					flexDirection: "column",
					border: "2px solid red",
					boxShadow: "0px 0px 5px rgb(180, 180, 180)",
				}}
			>
				<SearchBar />
				<div>List: </div>
			</div>
		</div>
	);
}

export default LowerDiv;
