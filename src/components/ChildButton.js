import React, { useContext } from "react";
import { myContext } from "./ChildOne";

function ChildButton(props) {
	const { selectedPart, setSelectedPart } = useContext(myContext);

	return (
		<button
			style={{
				fontWeight: "550",
				backgroundColor: props.selected ? "rgb(215, 243, 237)" : "white",
				fontSize: "18px",
				border: "none",
				borderRadius: "8px",
				padding: "20px",
				color: "#979B99",
				minWidth: "240px",
				marginBottom: "12px",
				lineHeight: "1px",
				outline: !props.selected ? "1px solid #979B99" : "none",
				overflow: "hidden",
				margin: "5px",
				textAlign: "center",
			}}
			onClick={(e) => {
				if (e.target.style.backgroundColor !== "rgb(215, 243, 237)") {
					e.target.style.backgroundColor = "#D7F3ED";
					e.target.style.outline = "none";
					setSelectedPart(selectedPart + "" + props.id);
				} else {
					e.target.style.backgroundColor = "white";
					e.target.style.outlineColor = "#979B99";
					e.target.style.outlineWidth = "1px";
					e.target.style.outlineStyle = "solid";
					alert("Removing: " + props.id);
					setSelectedPart(
						selectedPart.substring(
							0,
							selectedPart.indexOf(props.id) +
								selectedPart.substring(
									selectedPart.indexOf(props.id) + 1,
									selectedPart.length
								)
						)
					);
				}
			}}
		>
			{props.text}
		</button>
	);
}

export default ChildButton;
