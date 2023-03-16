import React, { useEffect, useState } from "react";
const RegionMap = {
	1: {
		1: [1, 2, 3, 4],
		2: [2, 4],
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
		8: [],
	},
	2: {
		5: [2, 4],
		6: [1, 2, 3, 4],

		1: [],
		2: [],
		3: [],
		4: [],
		7: [],
		8: [],
	},
	3: {
		7: [1, 2, 3, 4, 5],
		8: [1, 2, 3, 4, 5],
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
	},
	4: {
		1: [1, 2, 3, 4],
		4: [1, 2, 3, 4],
		5: [1, 2, 3, 4],
		2: [],
		3: [],
		6: [],
		7: [],
		8: [],
	},
};

function ChildOnev2(props) {
	const [selectedId, setSelectedId] = useState("");

	useEffect(() => {
		props.zoneData.split("").map((data) => {
			return RegionMap[data][props.id].map((data2) => {
				var ele = document.getElementById(data2 + "" + props.id);
				ele.style.backgroundColor = "#D7F3ED";
				ele.style.outline = "none";
				return setSelectedId(
					(prevState) => prevState + (data2 + "" + props.id) + ","
				);
			});
		});
	}, [props.id, props.regionData, props.zoneData]);

	// console.log(selectedId);
	const buttonStyle = {
		fontWeight: "550",
		backgroundColor: "white",
		fontSize: "18px",
		border: "none",
		borderRadius: "8px",
		padding: "20px",
		color: "#979B99",
		minWidth: "270px",
		marginBottom: "12px",
		lineHeight: "1px",
		outline: "1px solid #979B99",
		overflow: "hidden",
		margin: "5px",
		textAlign: "center",
	};
	const labelArr = [
		"Middle East",
		"Africa",
		"Arabic League",
		"Europe",
		"Asia",
		"Oceania",
		"Carribean",
		"North America",
	];
	const arr = ["Northern", "Eastern", "Western", "Southern", "Central"];
	function commonClick(e) {
		if (e.target.style.backgroundColor !== "rgb(215, 243, 237)") {
			e.target.style.backgroundColor = "#D7F3ED";
			e.target.style.outline = "none";
		} else {
			e.target.style.backgroundColor = "white";
			e.target.style.outlineColor = "#979B99";
			e.target.style.outlineWidth = "1px";
			e.target.style.outlineStyle = "solid";
		}
	}
	return (
		<div
			style={{
				flex: 1,
				display: "flex",
				flexDirection: "column",
				fontSize: "11px",
				color: "#646866",
				padding: "5px",
				overflowY: "hidden",
			}}
		>
			<div
				style={{
					flex: 1,
					display: "flex",
					flexDirection: "row",
					fontSize: "11px",
					maxHeight: "20px",
					color: "#646866",
					marginTop: "12px",
					// border: "1px solid black",
				}}
			>
				{labelArr[props.id - 1]}
			</div>
			<button style={buttonStyle} id={1 + "" + props.id} onClick={commonClick}>
				{arr[0] + " " + labelArr[props.id - 1]}
			</button>
			<button style={buttonStyle} id={2 + "" + props.id} onClick={commonClick}>
				{arr[1] + " " + labelArr[props.id - 1]}
			</button>
			<button style={buttonStyle} id={3 + "" + props.id} onClick={commonClick}>
				{arr[2] + " " + labelArr[props.id - 1]}
			</button>
			<button style={buttonStyle} id={4 + "" + props.id} onClick={commonClick}>
				{arr[3] + " " + labelArr[props.id - 1]}
			</button>
			<button style={buttonStyle} id={5 + "" + props.id} onClick={commonClick}>
				{arr[4] + " " + labelArr[props.id - 1]}
			</button>
		</div>
	);
}

export default ChildOnev2;
