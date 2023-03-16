import React, { useState, useMemo } from "react";
import ChildButton from "./ChildButton";

export const myContext = React.createContext({
	selectedPart: "",
	setSelectedPart: () => {},
});
function ChildOne(props) {
	const arr = ["Northern", "Eastern", "Western", "Southern", "Central"];
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

	const [selectedPart, setSelectedPart] = useState("");
	const value = useMemo(
		() => ({ selectedPart, setSelectedPart }),
		[selectedPart]
	);

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
			7: [0],
			8: [0],
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
	function findSelection(key) {
		switch (Number(props.id)) {
			//Middle East
			case 1:
				var x =
					props.zoneData.includes("1") || props.zoneData.includes("4")
						? RegionMap[1][Number(props.id)].includes(key + 1)
							? true
							: false
						: false;
				return x;
			//Africa
			case 2:
				x = props.zoneData.includes("1")
					? RegionMap[1][Number(props.id)].includes(key + 1)
						? true
						: false
					: false;
				return x;
			//Arabic League
			case 3:
				x = props.zoneData.includes("2")
					? RegionMap[4][Number(props.id)].includes(key + 1)
						? true
						: false
					: props.zoneData.includes("2")
					? RegionMap[2][Number(props.id)].includes(key + 1)
						? true
						: false
					: false;
				return x;
			//Europe
			case 4:
				x = props.zoneData.includes("4")
					? RegionMap[4][Number(props.id)].includes(key + 1)
						? true
						: false
					: false;
				return x;
			//Asia
			case 5:
				x = props.zoneData.includes("4")
					? RegionMap[4][Number(props.id)].includes(key + 1)
						? true
						: false
					: props.zoneData.includes("2")
					? RegionMap[2][Number(props.id)].includes(key + 1)
						? true
						: false
					: false;
				return x;
			//Oceania
			case 6:
				x = props.zoneData.includes("2")
					? RegionMap[2][Number(props.id)].includes(key + 1)
						? true
						: false
					: false;
				return x;
			//Carribean
			case 7:
				x = props.zoneData.includes("3")
					? RegionMap[3][Number(props.id)].includes(key + 1)
						? true
						: false
					: false;
				return x;
			//North America
			case 8:
				x = props.zoneData.includes("3")
					? RegionMap[3][Number(props.id)].includes(key + 1)
						? true
						: false
					: false;
				return x;
			default:
				return false;
		}
	}
	return (
		<myContext.Provider value={value}>
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
				{arr.map((label, key) => {
					return (
						<div key={key}>
							<ChildButton
								text={label + " " + labelArr[props.id - 1]}
								id={key}
								selected={findSelection(key)}
							/>
						</div>
					);
				})}
				<span style={{ color: "red", fontSize: "22px" }}>
					Parts selcted:{selectedPart}
				</span>
			</div>
		</myContext.Provider>
	);
}

export default ChildOne;
