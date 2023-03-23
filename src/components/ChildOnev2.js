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
		6: [],
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
		() => [
			"Middle East",
			"Africa",
			"Europe",
			"Asia",
			"Oceania",
			"Carribean",
			"North America",
		],
		[]
	);
	const ai = useCallback(
		(whatToAdd) => {
			var id = props.id - 1;
			var x = props.childData;
			var y = x[id];
			y.push(whatToAdd);
			x.splice(id, 1, y);
			props.childController(x);
		},
		[props]
	);

	const ri = useCallback(
		(whatToRemove) => {
			var x = props.childData; //[[],[]]
			var y = x[props.id - 1]; //[]
			if (y.indexOf(whatToRemove) > 0) {
				y.splice(y.indexOf(whatToRemove), 1); //new []
				x.splice(props.id - 1, 1, y);
				props.childController(x);
			}
		},
		[props]
	);

	const arr = ["Northern", "Eastern", "Western", "Southern", "Central"];
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
		if (props.zoneData.length > 0) {
			props.zoneData.split("").map((data) => {
				return RegionMap[data][props.id].map((data2) => {
					var ele = document.getElementById(data2 + "" + props.id);
					ele.style.backgroundColor = "white";
					ele.style.outline = "1px solid #979B99";
					ri(Number(data2));
					return null;
				});
			});
		}
	}, [
		props.id,
		props.regionData,
		ai,
		ri,
		labelArr,
		props.zoneData,
		props.childData,
	]);

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
