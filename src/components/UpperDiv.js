import React from "react";
import ZoneButton from "./ZoneButton";
import RegionButton from "./RegionButton";
import ChildOnev2 from "./ChildOnev2";
import WhiteLoad from "./WhiteLoad";
import "./test.css";
import SearchBar from "./SearchBar";

function UpperDiv(props) {
	function removeDuplicate() {
		var result = [];
		for (
			var it = new Set(props.regionData.split("")).values(), val = null;
			(val = it.next().value);

		) {
			result.push(val);
		}
		return result;
	}
	function reRender() {
		for (let index = 1; index <= 8; index++) {
			if (props.regionData.includes("" + index + "")) {
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
						controller={props.zoneController}
						secondController={props.regionController}
						secondCurrent={props.regionData}
						current={props.zoneData}
						text="MENA"
					/>
					<ZoneButton
						id={2}
						controller={props.zoneController}
						secondController={props.regionController}
						secondCurrent={props.regionData}
						current={props.zoneData}
						text="APAC"
					/>
					<ZoneButton
						id={3}
						controller={props.zoneController}
						secondController={props.regionController}
						secondCurrent={props.regionData}
						current={props.zoneData}
						text="NAC"
					/>
					<ZoneButton
						id={4}
						controller={props.zoneController}
						secondController={props.regionController}
						secondCurrent={props.regionData}
						current={props.zoneData}
						text="EMEA"
					/>
					<ZoneButton
						id={5}
						controller={props.zoneController}
						secondController={props.regionController}
						secondCurrent={props.regionData}
						current={props.zoneData}
						text="EEMEA"
					/>
					<ZoneButton
						id={6}
						controller={props.zoneController}
						secondController={props.regionController}
						secondCurrent={props.regionData}
						current={props.zoneData}
						text="SEMEA"
					/>
					<ZoneButton
						id={7}
						controller={props.zoneController}
						secondController={props.regionController}
						secondCurrent={props.regionData}
						current={props.zoneData}
						text="CEMEA"
					/>
					<ZoneButton
						id={8}
						controller={props.zoneController}
						secondController={props.regionController}
						secondCurrent={props.regionData}
						current={props.zoneData}
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
								current={props.regionData}
								controller={props.regionController}
								text="Middle East"
							/>
							<RegionButton
								id={2}
								current={props.regionData}
								controller={props.regionController}
								text="Africa"
							/>
							<RegionButton
								id={3}
								current={props.regionData}
								controller={props.regionController}
								text="Arabic League"
							/>
							<RegionButton
								id={4}
								current={props.regionData}
								controller={props.regionController}
								text="Europe"
							/>
							<RegionButton
								id={5}
								current={props.regionData}
								controller={props.regionController}
								text="Asia"
							/>
							<RegionButton
								id={6}
								current={props.regionData}
								controller={props.regionController}
								text="Oceania"
							/>
							<RegionButton
								id={7}
								current={props.regionData}
								controller={props.regionController}
								text="Carribean"
							/>
							<RegionButton
								id={8}
								current={props.regionData}
								controller={props.regionController}
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
						{props.regionData.length === 0 ? (
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
												regionData={props.regionData}
												id={number}
												zoneData={props.zoneData}
											/>
										</div>
									);
								})}
							</div>
						)}
					</div>
				</div>
			</div>
			/
		</div>
	);
}

export default UpperDiv;
