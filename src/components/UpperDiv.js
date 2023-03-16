import React, { useState } from "react";
import ZoneButton from "./ZoneButton";
import RegionButton from "./RegionButton";
import ChildOnev2 from "./ChildOnev2";
import WhiteLoad from "./WhiteLoad";
import "./test.css";

function UpperDiv() {
	const [zone, setZone] = useState("");
	const [region, setRegion] = useState("");
	function removeDuplicate() {
		var result = [];
		for (
			var it = new Set(region.split("")).values(), val = null;
			(val = it.next().value);

		) {
			result.push(val);
		}
		return result;
	}
	function reRender() {
		for (let index = 1; index <= 8; index++) {
			if (region.includes("" + index + "")) {
				var e = document.getElementById("region").children[Number(index) - 1];
				e.style.backgroundColor = "#D7F3ED";
				e.style.outline = "none";
			} else {
				e = document.getElementById("region").children[Number(index) - 1];
				e.style.backgroundColor = "white";
				e.style.outlineColor = "#979B99";
				e.style.outlineWidth = "1px";
				e.style.outlineStyle = "solid";
			}
		}
	}
	window.requestAnimationFrame(reRender);
	return (
		<div style={{ flex: 1, display: "flex", border: "0px solid green" }}>
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
				<div
					className="searchBar"
					style={{
						flex: 1,
						marginTop: "5px",
						marginLeft: "1%",
						backgroundColor: "#F2F2F2",
						display: "flex",
						justifyItems: "center",
						alignItems: "center",
						maxHeight: "40px",
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
							flex: 1,
							alignSelf: "center",
						}}
					>
						<input
							type={"text"}
							className="textBox"
							style={{
								border: "none",
								paddingLeft: "0.5%",
								width: "100%",
								backgroundColor: "#F2F2F2",
								outline: "none",
							}}
						/>
					</div>
				</div>
				<div
					style={{
						flex: 1,
						fontSize: "11px",
						marginTop: "10px",
						maxHeight: "20px",
						color: "#CCCCCC",
					}}
				>
					Hotspot Zones
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
					<ZoneButton
						id={1}
						controller={setZone}
						secondController={setRegion}
						secondCurrent={region}
						current={zone}
						text="MENA"
					/>
					<ZoneButton
						id={2}
						controller={setZone}
						secondController={setRegion}
						secondCurrent={region}
						current={zone}
						text="APAC"
					/>
					<ZoneButton
						id={3}
						controller={setZone}
						secondController={setRegion}
						secondCurrent={region}
						current={zone}
						text="NAC"
					/>
					<ZoneButton
						id={4}
						controller={setZone}
						secondController={setRegion}
						secondCurrent={region}
						current={zone}
						text="EMEA"
					/>
					<ZoneButton
						id={5}
						controller={setZone}
						secondController={setRegion}
						secondCurrent={region}
						current={zone}
						text="EEMEA"
					/>
					<ZoneButton
						id={6}
						controller={setZone}
						secondController={setRegion}
						secondCurrent={region}
						current={zone}
						text="SEMEA"
					/>
					<ZoneButton
						id={7}
						controller={setZone}
						secondController={setRegion}
						secondCurrent={region}
						current={zone}
						text="CEMEA"
					/>
					<ZoneButton
						id={8}
						controller={setZone}
						secondController={setRegion}
						secondCurrent={region}
						current={zone}
						text="CEE  "
					/>
				</div>
				<div
					style={{
						flex: 1,
						fontSize: "11px",
						maxHeight: "20px",
						color: "#CCCCCC",
						// border: "1px solid black",
					}}
				>
					Regions
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
								marginTop: "12px",
								// border: "1px solid black",
							}}
						>
							Hotspot Regions
						</div>
						<div
							id="region"
							className="scrollArea"
							style={{
								flex: 1,
								marginLeft: "12px",
								display: "flex",
								flexDirection: "column",
								height: "100%",
								direction: "rtl",
								overflowY: "auto",
								// border: "1px solid red",
								minHeight: "240px",
								padding: "0px 100px 10px 40px",
								maxHeight: "250px",
							}}
						>
							<RegionButton
								id={1}
								current={region}
								controller={setRegion}
								text="Middle East"
							/>
							<RegionButton
								id={2}
								current={region}
								controller={setRegion}
								text="Africa"
							/>
							<RegionButton
								id={3}
								current={region}
								controller={setRegion}
								text="Arabic League"
							/>
							<RegionButton
								id={4}
								current={region}
								controller={setRegion}
								text="Europe"
							/>
							<RegionButton
								id={5}
								current={region}
								controller={setRegion}
								text="Asia"
							/>
							<RegionButton
								id={6}
								current={region}
								controller={setRegion}
								text="Oceania"
							/>
							<RegionButton
								id={7}
								current={region}
								controller={setRegion}
								text="Carribean"
							/>
							<RegionButton
								id={8}
								current={region}
								controller={setRegion}
								text="North America"
							/>
						</div>
					</div>
					<div
						className="ChildElements scrollArea"
						style={{
							flex: 2,
							display: "flex",
							padding: "10px",
							overflowX: "auto",
							marginBottom: "0px",
						}}
					>
						{region.length === 0 ? (
							<div style={{ display: "flex", flexDirection: "row" }}>
								<div style={{ flex: 1 }}>
									<WhiteLoad />
								</div>
								<div style={{ flex: 1 }}>
									<WhiteLoad />
								</div>
								<div style={{ flex: 1 }}>
									<WhiteLoad />
								</div>
								<div style={{ flex: 1 }}>
									<WhiteLoad />
								</div>
							</div>
						) : (
							<div
								style={{
									display: "flex",
									border: "0px solid yellow",
									paddingBottom: "0px",
								}}
							>
								{removeDuplicate().map((number, key) => {
									return (
										<div key={key} style={{ border: "0px solid red" }}>
											<ChildOnev2
												regionData={region}
												id={number}
												zoneData={zone}
											/>
										</div>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default UpperDiv;
