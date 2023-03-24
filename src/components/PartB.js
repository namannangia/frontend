import React from "react";
import { countryData } from "./Data";

function PartB(props) {
	return (
		<div
			style={{
				flex: 8,
				display: "flex",
				marginTop: "10px",
			}}
		>
			{[1, 2].map((data, key) => {
				return (
					<div
						key={key}
						className="Hostspot Regions"
						style={{
							flex: 1,
							display: "flex",
							flexDirection: "column",
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
								// marginTop: "12px",
								marginLeft: "20px",
								// border: "1px solid black",
							}}
						>
							{props.labelArr2[key + 5]}
						</div>
						<div
							id="region2"
							className="scrollArea"
							style={{
								flex: 1,
								marginLeft: "2px",
								display: "flex",
								flexDirection: "column",
								height: "100%",
								direction: "rtl",
								overflowY: "auto",
								maxHeight: "340px",
							}}
						>
							<div style={{ direction: "ltr" }}>
								{countryData[key + 6].map((data3, key) => {
									return (
										<div
											style={{ display: "flex", margin: "0% 20%" }}
											key={key}
										>
											<button
												style={{
													flex: 1,
													fontWeight: "550",
													direction: "ltr",
													backgroundColor: "white",
													fontSize: "18px",
													border: "none",
													borderRadius: "8px",
													padding: "5px",
													color: "#979B99",
													outlineWidth: "1px",
													outlineStyle: "solid",
													// lineHeight: "1px",
													margin: "2%",
													whiteSpace: "break-spaces",
													textAlign: "center",
												}}
												onClick={(e) => {
													if (
														e.target.style.backgroundColor !==
														"rgb(215, 243, 237)"
													) {
														e.target.style.backgroundColor = "#D7F3ED";
														e.target.style.outline = "none";
														props.otherController((prev) => prev + e.target.id);
													} else {
														e.target.style.backgroundColor = "white";
														e.target.style.outlineColor = "#979B99";
														e.target.style.outlineWidth = "1px";
														e.target.style.outlineStyle = "solid";
													}
												}}
											>
												{data3}
											</button>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default PartB;
