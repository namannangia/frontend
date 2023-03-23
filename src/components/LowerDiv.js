import SearchBar from "./SearchBar";
import WhiteLoad2 from "./WhiteLoad2";
import { countryData } from "./Data";
import PopOuts from "./PopOuts";
import React from "react";
import "./test.css";
import PartB from "./PartB";

function LowerDiv(props) {
	React.useEffect(() => {
		alert(props.childData);
	}, [props]);

	const btnStyle = {
		flex: 1,
		fontWeight: "550",
		backgroundColor: "white",
		fontSize: "14px",
		border: "none",
		borderRadius: "8px",
		marginTop: "5px",
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
	};
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
	const [other, setOther] = React.useState("");
	window.requestAnimationFrame(() => {
		props.regionData.split("").map((data, key2) => {
			return countryData[data].map((data2, key) => {
				if (other.includes(data2) === -1)
					return setOther((prev) => prev + "," + data2);
				return null;
			});
		});
	});

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
						flex: 2,
						marginLeft: "3%",
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

						{other.length > 0 || props.zoneData.length > 0 ? (
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
									{other
										.split(",")
										.splice(1, 0)
										.map((data2, key) => {
											return (
												<span id={"btn" + key + " "} key={key}>
													<PopOuts data={data2} id={"btn" + key + " $"} />
												</span>
											);
										})}
								</div>
							</div>
						) : (
							<WhiteLoad2 />
						)}
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
								fontSize: "11px",
								marginTop: "10px",
								color: "#CCCCCC",
								marginBottom: "10px",
							}}
						>
							HOTSPOT Countries
						</div>
						So:
						{other}
						<div
							id="zone"
							className="scrollArea 	"
							style={{
								flex: 1,
								display: "flex",
								flexDirection: "row",
								flexWrap: "wrap",
							}}
						>
							{["USA", "Canada", "Armenia", "China"].map((data, key) => {
								return (
									<span
										style={{
											display: "flex",
											flexWrap: "wrap",
											overflowWrap: "wrap",
										}}
										key={key}
									>
										<button
											style={btnStyle}
											onClick={(e) => {
												if (
													e.target.style.backgroundColor !==
													"rgb(215, 243, 237)"
												) {
													e.target.style.backgroundColor = "#D7F3ED";
													e.target.style.outline = "none";
													setOther((prev) => prev + "," + data);
												} else {
													e.target.style.backgroundColor = "white";
													e.target.style.outlineColor = "#979B99";
													e.target.style.outlineWidth = "1px";
													e.target.style.outlineStyle = "solid";
													var x = other;
													if (x.indexOf(data) >= 0) {
														x =
															x.substring(0, x.indexOf(data) - 1) +
															x.substring(
																x.indexOf(data) + data.length,
																x.length
															);
														setOther(x);
													}
												}
											}}
										>
											{data}
										</button>
									</span>
								);
							})}
						</div>
						<PartB
							labelArr2={labelArr2}
							otherData={other}
							otherController={setOther}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LowerDiv;
