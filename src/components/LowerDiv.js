import React from "react";

function LowerDiv() {
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
					boxShadow: "0px 0px 5px rgb(180, 180, 180)",
				}}
			>
				<div
					className="searchBar"
					style={{
						flex: 10,
						marginLeft: "2%",
						backgroundColor: "#F2F2F2",
						display: "flex",
						justifyItems: "center",
						alignItems: "center",
						height: "45px",
						borderRadius: "10px",
					}}
				>
					<div className="searchIcon" style={{ padding: "10px" }}>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
								stroke="#646866"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M21 21L16.65 16.65"
								stroke="#646866"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div
						style={{
							flex: 10,
							alignSelf: "center",
						}}
					>
						<input
							type={"text"}
							className="textBox"
							style={{
								border: "none",
								paddingLeft: "0.5%",
								width: "80%",
								backgroundColor: "#F2F2F2",
								outline: "none",
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LowerDiv;
