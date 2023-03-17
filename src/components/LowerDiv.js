import React, { useEffect, useState } from "react";
import "./test.css";
import SearchBar from "./SearchBar";
import { countryData } from "./Data";
import { Button } from "@mui/material";
import WhiteLoad2 from "./WhiteLoad2";
import PopOuts from "./PopOuts";
import ZoneButton from "./ZoneButton";
import RegionButton from "./RegionButton";
import ChildOnev2 from "./ChildOnev2";
import WhiteLoad from "./WhiteLoad";
import "./test.css";

function LowerDiv(props) {
	const [ButtonArray, setButtonArray] = useState();

	useEffect(() => {
		console.log("Hi");
	}, []);

	const labelArr = [
		"MENA",
		"APAC",
		"NAC",
		"EMEA",
		"EEMEA",
		"SEMEA",
		"CEMEA",
		"CEE",
	];
	const labelArr2 = [
		"Middle East",
		"Africa",
		"Arabic League",
		"Europe",
		"Asia",
		"Oceania",
		"Carribean",
		"North America",
	];
	return (
		<div
			style={{
				// border: "2px solid black",
				width: "100%",
				display: "flex",
				margin: "2%",
				// maxHeight: "30%",
				flexDirection: "column",
			}}
		>
			<div style={{ flex: 1, display: "flex", flexDirection: "row" }}>
				<span
					style={{
						flex: 1,
						fontSize: "16px",
						fontWeight: "600",
						width: "100%",
					}}
				>
					Selected Countries
				</span>
				<span
					style={{
						flex: 1,
						fontSize: "16px",
						fontWeight: "600",
						width: "100%",
					}}
				>
					Individual Section
				</span>
			</div>

			<div
				style={{
					flex: 10,
					display: "flex",
					// maxHeight: "40%",
					flexDirection: "row",
				}}
			>
				{/* 

				
					FIRST PART
				
				
				*/}

				<div
					style={{
						flex: 1,
						display: "flex",
						resize: "none",
						overflow: "hidden",
						// border: "3px solid red",
					}}
				>
					<div
						style={{
							flex: 1,
							margin: "2%",
							borderRadius: "8px",
							padding: "10px",
							display: "flex",
							flexDirection: "column",
							// border: "2px solid blue",
							// maxHeight: "40%",
							boxShadow: "0px 0px 5px rgb(180, 180, 180)",
						}}
					>
						<SearchBar />
						{props.zoneData.length > 0 ? (
							<div
								style={{
									flex: 1,
									margin: "10px",
									fontSize: "14px",
									maxHeight: "20px",
									color: "#CCCCCC",
								}}
							>
								{props.zoneData.split("").map((data, key) => {
									return (
										labelArr[data - 1] +
										(props.zoneData.length - 1 !== key ? ", " : " ")
									);
								})}
								{props.zoneData.length >= 1 ? "Countries" : ""}
							</div>
						) : (
							<WhiteLoad2 />
						)}

						<div
							className="scrollArea"
							style={{
								direction: "rtl",
								padding: "0px 20px 20px 20px",
								marginTop: "20px",
								alignContent: "center",
								overflowY: "auto",
							}}
						>
							<div
								style={{
									direction: "ltr",
									maxHeight: "400px",
								}}
							>
								{props.regionData.split("").map((data, key2) => {
									return countryData[data].map((data2, key) => {
										return (
											<span id={"btn" + key + " " + key2} key={key}>
												<PopOuts
													data={data2}
													id={"btn" + key + " " + key2 + "$"}
												/>
											</span>
										);
									});
								})}
							</div>
						</div>
					</div>
				</div>
				{/* 

				
					SECOND PART
				
				
				*/}

				<div style={{ flex: 2, display: "flex", border: "0px solid green" }}>
					<div
						style={{
							flex: 1,
							margin: "2%",
							borderRadius: "8px",
							padding: "10px",
							display: "flex",
							width: "100px",
							flexDirection: "column",
							boxShadow: "0px 0px 5px rgb(180, 180, 180)",
						}}
					>
						<SearchBar />
						<div
							style={{
								flex: 1,
								fontSize: "11px",
								marginTop: "10px",
								maxHeight: "20px",
								color: "#CCCCCC",
							}}
						>
							HOTSPOT Countries
						</div>
						<div
							id="zone"
							className="scrollArea 	"
							style={{
								flex: 1,
								display: "flex",
								flexDirection: "row",
								padding: "10px",
								overflowY: "hidden",
								overflowX: "auto",
								paddingBottom: "20px",
							}}
						>
							{["USA", "Canada", "Armenia", "China"].map((data, key) => {
								return (
									<div key={key}>
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
												if (
													e.target.style.backgroundColor !==
													"rgb(215, 243, 237)"
												) {
													e.target.style.backgroundColor = "#D7F3ED";
													e.target.style.outline = "none";
												} else {
													e.target.style.backgroundColor = "white";
													e.target.style.outlineColor = "#979B99";
													e.target.style.outlineWidth = "1px";
													e.target.style.outlineStyle = "solid";
												}
											}}
										>
											{data}
										</button>
									</div>
								);
							})}
						</div>
						<div
							style={{
								flex: 6,
								display: "flex",
								// border: "1px solid black",
							}}
						>
							<div
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
									{labelArr2[1]}
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
										// border: "1px solid red",
										minHeight: "240px",
										maxHeight: "250px",
									}}
								>
									<div style={{ direction: "ltr" }}>
										{countryData[2].map((data, key) => {
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
															padding: "20px",
															color: "#979B99",
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
															if (
																e.target.style.backgroundColor !==
																"rgb(215, 243, 237)"
															) {
																e.target.style.backgroundColor = "#D7F3ED";
																e.target.style.outline = "none";
															} else {
																e.target.style.backgroundColor = "white";
																e.target.style.outlineColor = "#979B99";
																e.target.style.outlineWidth = "1px";
																e.target.style.outlineStyle = "solid";
															}
														}}
													>
														{data}
													</button>
												</div>
											);
										})}
									</div>
								</div>
							</div>
							<div
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
									{labelArr2[5]}
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
										// border: "1px solid red",
										minHeight: "240px",
										maxHeight: "250px",
									}}
								>
									<div style={{ direction: "ltr" }}>
										{countryData[6].map((data, key) => {
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
															padding: "20px",
															color: "#979B99",
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
															if (
																e.target.style.backgroundColor !==
																"rgb(215, 243, 237)"
															) {
																e.target.style.backgroundColor = "#D7F3ED";
																e.target.style.outline = "none";
															} else {
																e.target.style.backgroundColor = "white";
																e.target.style.outlineColor = "#979B99";
																e.target.style.outlineWidth = "1px";
																e.target.style.outlineStyle = "solid";
															}
														}}
													>
														{data}
													</button>
												</div>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LowerDiv;
