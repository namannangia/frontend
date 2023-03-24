import { usePreviousProps } from "@mui/utils";
import React, { useCallback, useEffect } from "react";
const RegionMap = {
	1: {
		1: [5],
		2: [1, 3, 5],
		3: [],
		4: [],
		5: [],
		6: [],
		7: [],
		8: [],
	},
	2: {
		5: [1, 3, 5],
		6: [5],

		1: [],
		2: [],
		3: [],
		4: [],
		7: [],
		8: [],
	},
	3: {
		7: [],
		8: [],
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [2, 3, 4],
	},
	4: {
		1: [5],
		4: [5],
		5: [5],
		2: [],
		3: [],
		6: [],
		7: [],
		8: [],
	},
};

function ChildOnev2(props) {
	const labelArr = React.useMemo(
		() => ["Middle East", "Africa", "Europe", "Asia", "Oceania", "AMERs"],
		[]
	);
	const ai = useCallback(
		(whatToAdd) => {
			var id = props.id - 1;
			var x = props.childData;
			var y = x[id];
			y.push(whatToAdd);
			x.splice(id, 1, y);
			// console.log("Added " + whatToAdd + " to " + labelArr[props.id - 1]);
			props.childController(x, props.childData);
		},
		[props]
	);

	function ai2(whatToAdd) {
		var id = props.id - 1;
		var x = props.childData;
		var y = x[id];
		y.push(whatToAdd);
		x.splice(id, 1, y);
		// console.log("Added " + whatToAdd + " to " + labelArr[props.id - 1]);
		props.childController(x, props.childData);
	}

	const ri = useCallback(
		(whatToRemove) => {
			var x = props.childData; //[[],[]]
			var y = x[props.id - 1]; //[]
			if (y.indexOf(whatToRemove) >= 0) {
				y.splice(y.indexOf(whatToRemove), 1); //new []
				x.splice(props.id - 1, 1, y);
				props.childController(x, props.childData);
				// console.log(
				// 	"Removed " + whatToRemove + " from " + labelArr[props.id - 1]
				// );
			}
		},
		[props]
	);

	function ri2(whatToRemove) {
		var x = props.childData; //[[],[]]
		var y = x[props.id - 1]; //[]
		if (y.indexOf(whatToRemove) >= 0) {
			y.splice(y.indexOf(whatToRemove), 1); //new []
			x.splice(props.id - 1, 1, y);
			props.childController(x, props.childData);
			// console.log(
			// 	"Removed " + whatToRemove + " from " + labelArr[props.id - 1]
			// );
		}
	}

	const arr = ["Northern", "Eastern", "Western", "Southern", "Central"];
	const amerArr = [
		"North America",
		"East America",
		"West America",
		"South America",
		"Carribean",
	];
	const buttonStyle = {
		fontWeight: "550",
		backgroundColor: "#D7F3ED",
		fontSize: "18px",
		border: "none",
		borderRadius: "8px",
		padding: "20px",
		color: "#979B99",
		minWidth: "250px",
		marginBottom: "12px",
		lineHeight: "1px",
		outline: "0px solid #979B99",
		overflow: "hidden",
		margin: "5px",
		textAlign: "center",
	};
	useEffect(() => {
		ai2(5);
		ai2(4);
		ai2(3);
		ai2(2);
		ai2(1);
		// console.log(labelArr[props.id - 1] + " got " + props.childData);
		if (props.zoneData.length > 0) {
			props.zoneData.split("").map((data) => {
				return RegionMap[data][props.id].map((data2) => {
					var ele = document.getElementById(data2 + "" + props.id);
					ele.style.backgroundColor = "white";
					ele.style.outline = "1px solid #979B99";
					// console.log("Data2 at [" + labelArr[props.id - 1] + "]: " + data2);
					ri2(Number(data2));
					return null;
				});
			});
		}

		return () => {
			console.log(props.childData[props.id - 1]);
			ri2(1);
			ri2(2);
			ri2(3);
			ri2(4);
			ri2(5);
		};
	}, [ri2, ai2, props, labelArr]);

	function commonClick(e) {
		if (e.target.style.backgroundColor !== "rgb(215, 243, 237)") {
			e.target.style.backgroundColor = "#D7F3ED";
			e.target.style.outline = "none";
			ai(Number(e.target.id.charAt(0)));
		} else {
			e.target.style.backgroundColor = "white";
			e.target.style.outline = "1px solid #979B99";
			ri(Number(e.target.id.charAt(0)));
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
			{props.id === "6" ? (
				<div style={{ display: "flex", flexDirection: "column" }}>
					<button
						style={buttonStyle}
						id={1 + "" + props.id}
						onClick={commonClick}
					>
						{amerArr[0]}
					</button>
					<button
						style={buttonStyle}
						id={2 + "" + props.id}
						onClick={commonClick}
					>
						{amerArr[1]}
					</button>
					<button
						style={buttonStyle}
						id={3 + "" + props.id}
						onClick={commonClick}
					>
						{amerArr[2]}
					</button>
					<button
						style={buttonStyle}
						id={4 + "" + props.id}
						onClick={commonClick}
					>
						{amerArr[3]}
					</button>
					<button
						style={buttonStyle}
						id={5 + "" + props.id}
						onClick={commonClick}
					>
						{amerArr[4]}
					</button>
				</div>
			) : (
				<div style={{ display: "flex", flexDirection: "column" }}>
					<button
						style={buttonStyle}
						id={1 + "" + props.id}
						onClick={commonClick}
					>
						{arr[0] + " " + labelArr[props.id - 1]}
					</button>
					<button
						style={buttonStyle}
						id={2 + "" + props.id}
						onClick={commonClick}
					>
						{arr[1] + " " + labelArr[props.id - 1]}
					</button>
					<button
						style={buttonStyle}
						id={3 + "" + props.id}
						onClick={commonClick}
					>
						{arr[2] + " " + labelArr[props.id - 1]}
					</button>
					<button
						style={buttonStyle}
						id={4 + "" + props.id}
						onClick={commonClick}
					>
						{arr[3] + " " + labelArr[props.id - 1]}
					</button>
					<button
						style={buttonStyle}
						id={5 + "" + props.id}
						onClick={commonClick}
					>
						{arr[4] + " " + labelArr[props.id - 1]}
					</button>
				</div>
			)}
		</div>
	);
}

export default ChildOnev2;
