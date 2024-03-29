import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
	return (
		<div
			style={{
				paddingTop: "20px",
			}}
		>
			<Stack spacing={0}>
				<Skeleton
					variant="rounded"
					width={"10vw"}
					height={41}
					sx={{
						borderRadius: "8px",
						padding: "20px",
						marginBottom: "12px",
						margin: "5px",
						minWidth: "-webkit-fill-available",
					}}
				/>
				<Skeleton
					variant="rounded"
					width={"10vw"}
					height={41}
					sx={{
						borderRadius: "8px",
						padding: "20px",
						minWidth: "-webkit-fill-available",
						marginBottom: "12px",
						margin: "5px",
					}}
				/>
				<Skeleton
					variant="rounded"
					width={"10vw"}
					height={41}
					sx={{
						borderRadius: "8px",
						padding: "20px",
						minWidth: "-webkit-fill-available",
						marginBottom: "12px",
						margin: "5px",
					}}
				/>
				<Skeleton
					variant="rounded"
					width={"10vw"}
					height={41}
					sx={{
						borderRadius: "8px",
						padding: "20px",
						minWidth: "-webkit-fill-available",
						marginBottom: "12px",
						margin: "5px",
					}}
				/>
				<Skeleton
					variant="rounded"
					width={"10vw"}
					height={41}
					sx={{
						borderRadius: "8px",
						padding: "20px",
						minWidth: "-webkit-fill-available",
						marginBottom: "12px",
						margin: "5px",
					}}
				/>
			</Stack>
		</div>
	);
}
