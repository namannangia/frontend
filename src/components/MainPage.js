import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Content from "./Content";
import "./test.css";
import { iconArray } from "./iconArray";
import SearchBar from "./SearchBar";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

const textArray = [
	"Home",
	"Feedback",
	"Time Spent",
	"Data Management",
	"Region",
	"Settings",
];

export default function PersistentDrawerLeft() {
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		if (open) setOpen(false);
		else setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<Box sx={{ display: "flex", marginLeft: "10px" }}>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					"& .MuiDrawer-paper": {
						width: drawerWidth,
						boxSizing: "border-box",
						backgroundColor: "#F2F2F2",
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<Typography
						noWrap
						component="div"
						sx={{
							fontWeight: "550",
							fontSize: "20px",
						}}
						margin={"10px 10px 10px 20px "}
						alignSelf={"center"}
					>
						AtiUttam
					</Typography>
					<IconButton onClick={handleDrawerClose}>
						<ChevronLeftIcon />
					</IconButton>
				</DrawerHeader>
				<List>
					{textArray.map((text, index) => (
						<ListItem key={text}>
							<ListItemButton
								style={{
									borderRadius: "15px",
									background: index === 4 ? "white" : "inherit",
								}}
								onClick={() => {
									alert(
										"Welcome to " +
											textArray[index] +
											". This page is not avaiable yet."
									);
								}}
							>
								<ListItemIcon>{iconArray[index]}</ListItemIcon>
								<div
									style={{
										fontSize: "14px",
										padding: "5px",
									}}
								>
									{text}
								</div>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Main
				className="scrollArea"
				open={open}
				sx={{
					padding: 0,
					paddingLeft: "0px",
					height: "100vh",
					display: "flex",
					flexDirection: "column",
				}}
			>
				<div
					style={{
						flex: 1,
						display: "flex",
						alignItems: "center",
						justifyItems: "center",
						minHeight: "60px",
					}}
				>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							visibility: !open ? "visible" : "hidden",
							borderRadius: "20px",
							outline: "none",
							paddingLeft: "20px",
							backgroundColor: "transparent",
							// border: "1px solid black",
						}}
					>
						<MenuIcon />
					</IconButton>
					<SearchBar />
					<div
						className="HRUser"
						style={{
							marginLeft: "15%",
							flex: 3,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<div
							style={{
								flex: 1,
								display: "flex",
								alignItems: "center",
							}}
						>
							<span
								style={{
									height: "35px",
									width: "35px",
									margin: 0,
									fontSize: "16px",
									background: "#39C6A4",
									alignItems: "center",
									justifyContent: "center",
									fontWeight: "500",
									borderRadius: "10px",
									color: "white",
									display: "flex",
								}}
							>
								HR
							</span>
							<span style={{ paddingLeft: "10px", paddingRight: "10px" }}>
								USER
							</span>
							<div
								style={{ cursor: "pointer" }}
								onClick={() => {
									alert("Not Coded yet.");
								}}
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M18 9L12 15L6 9"
										stroke="#4C4C4C"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
				<Divider variant="full-width" sx={{ backgroundColor: "black" }} />
				<div
					style={{
						flex: 19,
						display: "flex",
						margin: "2px 5px 5px 2px",
					}}
				>
					<Content />
				</div>
			</Main>
		</Box>
	);
}
