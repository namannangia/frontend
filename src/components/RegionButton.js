import React from "react";

function RegionButton(props) {
	const x = props.controller;
	return (
		<button
			style={{
				fontWeight: "550",
				direction: "ltr",
				backgroundColor: "white",
				fontSize: "18px",
				border: "none",
				borderRadius: "8px",
				padding: "20px",
				color: "#979B99",
				minWidth: "200px",
				outlineWidth: "1px",
				outlineStyle: "solid",
				lineHeight: "1px",
				overflow: "hidden",
				marginTop: "6px",
				marginLeft: "5px",
				marginBottom: "6px",
				textAlign: "center",
			}}
			onClick={(e) => {
				if (e.target.style.backgroundColor !== "rgb(215, 243, 237)") {
					e.target.style.backgroundColor = "#D7F3ED";
					e.target.style.outline = "none";
					props.controller(props.current + "" + props.id + "");
				} else {
					e.target.style.backgroundColor = "white";
					e.target.style.outlineColor = "#979B99";
					e.target.style.outlineWidth = "1px";
					e.target.style.outlineStyle = "solid";
					var str = String(props.current);
					var index = str.indexOf("" + props.id + "");
					str = str.substring(0, index) + str.substring(index + 1, str.length);
					x(str);
				}
			}}
		>
			{props.text}
		</button>
	);
}

export default RegionButton;
