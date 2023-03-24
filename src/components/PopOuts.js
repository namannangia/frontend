import React from "react";

function PopOuts(props) {
	return (
		<button
			onClick={() => {
				alert("{" + props.data + "} removed");
				var y = props.otherData.indexOf(props.data);
				if (y !== -1) {
					var str =
						props.otherData.substring(0, y - 1) +
						props.otherData.substring(
							y + props.data.length,
							props.otherData.length
						);
					props.otherController(str);
				}
			}}
			style={{
				direction: "ltr",
				flex: "1",
				padding: "5px",
				border: "none",
				outline: "none",
				margin: "1px",
				fontSize: "20px",
				backgroundColor: "white",
				minWidth: "50px",
			}}
		>
			{props.data}
			{"      "}
			<svg
				width="10"
				height="10"
				viewBox="0 0 10 10"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M9 1L1 9M1 1L9 9" stroke="#4C4C4C" strokeLinecap="round" />
			</svg>
		</button>
	);
}

export default PopOuts;
