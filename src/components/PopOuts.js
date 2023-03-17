import React from "react";
import { data } from "./Data";

function PopOuts(props) {
	return (
		<button
			onClick={() => {
				var ele = document.getElementById(
					props.id.substring(0, props.id.length - 1)
				);
				ele.remove();
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
