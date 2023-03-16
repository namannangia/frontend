import React from "react";

function ZoneButton(props) {
	const x = props.controller;
	return (
		<button
			style={{
				fontWeight: "550",
				backgroundColor: "white",
				fontSize: "14px",
				border: "none",
				borderRadius: "8px",
				padding: "15px 15px 15px 10px",
				color: "#979B99",
				outlineWidth: "1px",
				outlineStyle: "solid",
				lineHeight: "1px",
				maxHeight: "32px",
				minWidth: "60px",
				overflow: "hidden",
				marginRight: "12px",
				textAlign: "center",
			}}
			onClick={(e) => {
				if (e.target.style.backgroundColor !== "rgb(215, 243, 237)") {
					e.target.style.backgroundColor = "#D7F3ED";
					e.target.style.outline = "none";
					props.controller((prevRender) => prevRender + "" + props.id);
					if (props.id === 1)
						props.secondController((prevRender) => prevRender + "12");
					if (props.id === 2)
						props.secondController((prevRender) => prevRender + "56");
					if (props.id === 3)
						props.secondController((prevRender) => prevRender + "87");
					if (props.id === 4)
						props.secondController((prevRender) => prevRender + "415");
				} else {
					e.target.style.backgroundColor = "white";
					e.target.style.outlineColor = "#979B99";
					e.target.style.outlineWidth = "1px";
					e.target.style.outlineStyle = "solid";
					var str = String(props.current);
					var index = str.indexOf("" + props.id);
					str = str.substring(0, index) + str.substring(index + 1, str.length);
					x(str);
					if (props.id === 1) {
						var str2 = String(props.secondCurrent);
						var index2 = str2.indexOf("1");
						str2 =
							str2.substring(0, index2) +
							str2.substring(index2 + 1, str2.length);

						index2 = str2.indexOf("2");
						str2 =
							str2.substring(0, index2) +
							str2.substring(index2 + 1, str2.length);
						props.secondController(str2);
					}
					if (props.id === 2) {
						str2 = String(props.secondCurrent);
						index2 = str2.indexOf("5");
						str2 =
							str2.substring(0, index2) +
							str2.substring(index2 + 1, str2.length);

						index2 = str2.indexOf("6");
						str2 =
							str2.substring(0, index2) +
							str2.substring(index2 + 1, str2.length);
						props.secondController(str2);
					}
					if (props.id === 3) {
						str2 = String(props.secondCurrent);
						index2 = str2.indexOf("7");
						str2 =
							str2.substring(0, index2) +
							str2.substring(index2 + 1, str2.length);

						index2 = str2.indexOf("8");
						str2 =
							str2.substring(0, index2) +
							str2.substring(index2 + 1, str2.length);
						props.secondController(str2);
					}
					if (props.id === 4) {
						str2 = String(props.secondCurrent);
						index2 = str2.indexOf("4");
						str2 =
							str2.substring(0, index2) +
							str2.substring(index2 + 1, str2.length);
						index2 = str2.indexOf("1");
						str2 =
							str2.substring(0, index2) +
							str2.substring(index2 + 1, str2.length);
						index2 = str2.indexOf("5");
						str2 =
							str2.substring(0, index2) +
							str2.substring(index2 + 1, str2.length);
						props.secondController(str2);
					}
				}
			}}
		>
			{props.text}
		</button>
	);
}

export default ZoneButton;
