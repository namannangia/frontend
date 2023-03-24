import React, { useEffect, useState } from "react";

function Temp(props) {
	return (
		<div>
			{props.childData.map((data1, key) => {
				console.log("dATA=> '" + data1 + "'");
				return data1.map((data2, key2) => {
					return <span key={key2}>{data2}</span>;
				});
			})}
		</div>
	);
}

export default Temp;
