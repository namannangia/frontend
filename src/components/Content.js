import React, { useState } from "react";
import LowerDiv from "./LowerDiv";
import UpperDiv from "./UpperDiv";
import "./test.css";

function Content() {
	const [zone, setZone] = useState("");
	const [region, setRegion] = useState("");
	return (
		<div
			className="Content scrollArea"
			style={{
				display: "flex",
				flex: 2,
				flexDirection: "column",
				justifyContent: "center",
				// border: "3px solid blue",
				alignItems: "center",
			}}
		>
			<div
				className="GradientRegion"
				style={{
					flex: 1,
					marginTop: "2%",
					marginBottom: "4%",
					padding: "5px",
					display: "flex",
					minWidth: "90%",
					alignItems: "center",
					background: "linear-gradient(90.43deg, #61D1B5 16.06%, #A1A3F7 98%)",
					borderRadius: "8px",
				}}
			>
				<div
					style={{
						flex: 1,
						color: "#FBFEFD",
						paddingLeft: "2%",
						fontSize: "24px",
					}}
				>
					Region
				</div>
			</div>

			<div
				style={{
					flex: 10,
					width: "90%",
					borderRadius: "8px",
					padding: "10px",
					display: "flex",
					flexDirection: "column",
					// border: "2px solid black",
					boxShadow: "0px 0px  7px rgb(180, 180, 180)",
				}}
			>
				<span style={{ fontSize: "16px", fontWeight: "600" }}>Region</span>
				<div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
					<UpperDiv
						zoneData={zone}
						regionData={region}
						zoneController={setZone}
						regionController={setRegion}
					/>
				</div>
				<div style={{ flex: 1, display: "flex" }}>
					<LowerDiv
						zoneData={zone}
						regionData={region}
						zoneController={setZone}
						regionController={setRegion}
					/>
				</div>
			</div>
			<div style={{ flex: 1 }}></div>
		</div>
	);
}

export default Content;
