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

const drawerWidth = 220;

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

const iconArray = [
	<svg
		width="20"
		height="21"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3 9.65466L12 2.65466L21 9.65466V20.6547C21 21.1851 20.7893 21.6938 20.4142 22.0689C20.0391 22.4439 19.5304 22.6547 19 22.6547H5C4.46957 22.6547 3.96086 22.4439 3.58579 22.0689C3.21071 21.6938 3 21.1851 3 20.6547V9.65466Z"
			stroke="#4C4C4C"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M9 22.6547V12.6547H15V22.6547"
			stroke="#4C4C4C"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>,
	<svg
		width="20"
		height="21"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M21 15.6547C21 16.1851 20.7893 16.6938 20.4142 17.0689C20.0391 17.4439 19.5304 17.6547 19 17.6547H7L3 21.6547V5.65466C3 5.12423 3.21071 4.61552 3.58579 4.24045C3.96086 3.86538 4.46957 3.65466 5 3.65466H19C19.5304 3.65466 20.0391 3.86538 20.4142 4.24045C20.7893 4.61552 21 5.12423 21 5.65466V15.6547Z"
			stroke="#4C4C4C"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>,
	<svg
		width="20"
		height="21"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M21.21 16.5447C20.5739 18.0491 19.5788 19.3749 18.3119 20.406C17.045 21.437 15.5448 22.1421 13.9425 22.4594C12.3401 22.7768 10.6845 22.6968 9.12018 22.2264C7.55591 21.7561 6.13066 20.9097 4.96906 19.7613C3.80745 18.6129 2.94485 17.1974 2.45667 15.6386C1.96849 14.0798 1.8696 12.4251 2.16863 10.8193C2.46767 9.21343 3.15553 7.70528 4.17208 6.42668C5.18863 5.14808 6.50292 4.13797 8.00004 3.48465"
			stroke="#4C4C4C"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M22 12.6547C22 11.3414 21.7413 10.0411 21.2388 8.82783C20.7362 7.61457 19.9997 6.51218 19.0711 5.5836C18.1425 4.65501 17.0401 3.91841 15.8268 3.41587C14.6136 2.91332 13.3132 2.65466 12 2.65466V12.6547H22Z"
			stroke="#4C4C4C"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>,
	<svg
		width="20"
		height="21"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M18 3.65466C17.2044 3.65466 16.4413 3.97073 15.8787 4.53334C15.3161 5.09595 15 5.85901 15 6.65466V18.6547C15 19.4503 15.3161 20.2134 15.8787 20.776C16.4413 21.3386 17.2044 21.6547 18 21.6547C18.7956 21.6547 19.5587 21.3386 20.1213 20.776C20.6839 20.2134 21 19.4503 21 18.6547C21 17.859 20.6839 17.096 20.1213 16.5333C19.5587 15.9707 18.7956 15.6547 18 15.6547H6C5.20435 15.6547 4.44129 15.9707 3.87868 16.5333C3.31607 17.096 3 17.859 3 18.6547C3 19.4503 3.31607 20.2134 3.87868 20.776C4.44129 21.3386 5.20435 21.6547 6 21.6547C6.79565 21.6547 7.55871 21.3386 8.12132 20.776C8.68393 20.2134 9 19.4503 9 18.6547V6.65466C9 5.85901 8.68393 5.09595 8.12132 4.53334C7.55871 3.97073 6.79565 3.65466 6 3.65466C5.20435 3.65466 4.44129 3.97073 3.87868 4.53334C3.31607 5.09595 3 5.85901 3 6.65466C3 7.45031 3.31607 8.21337 3.87868 8.77598C4.44129 9.33859 5.20435 9.65466 6 9.65466H18C18.7956 9.65466 19.5587 9.33859 20.1213 8.77598C20.6839 8.21337 21 7.45031 21 6.65466C21 5.85901 20.6839 5.09595 20.1213 4.53334C19.5587 3.97073 18.7956 3.65466 18 3.65466Z"
			stroke="#4C4C4C"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>,
	<svg
		width="20"
		height="21"
		viewBox="0 0 25 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M8.99542 7.68336L8.97457 17.6633M7.305 12.6698L8.98499 12.6733M8.97021 10.1733C13.2702 10.1823 16.7432 13.5496 16.7345 17.6895"
			stroke="#39C6A4"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M16.7555 7.68954C16.7517 9.48954 15.7884 11.0875 14.276 12.2344"
			stroke="#39C6A4"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M22.025 12.7006C22.0365 7.17759 17.5689 2.69125 12.0459 2.67971C6.52291 2.66818 2.03657 7.13582 2.02503 12.6588C2.0135 18.1818 6.48114 22.6681 12.0041 22.6797C17.5271 22.6912 22.0135 18.2236 22.025 12.7006Z"
			stroke="#39C6A4"
			strokeWidth="1.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>,
	<svg
		width="20"
		height="21"
		viewBox="0 0 24 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<g clipPath="url(#clip0_2_77)">
			<path
				d="M12 15.7047C13.6569 15.7047 15 14.3616 15 12.7047C15 11.0479 13.6569 9.70474 12 9.70474C10.3431 9.70474 9 11.0479 9 12.7047C9 14.3616 10.3431 15.7047 12 15.7047Z"
				stroke="#4C4C4C"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.4 15.7047C19.2669 16.0064 19.2272 16.3409 19.286 16.6653C19.3448 16.9897 19.4995 17.2891 19.73 17.5247L19.79 17.5847C19.976 17.7705 20.1235 17.9911 20.2241 18.2339C20.3248 18.4767 20.3766 18.7369 20.3766 18.9997C20.3766 19.2626 20.3248 19.5228 20.2241 19.7656C20.1235 20.0084 19.976 20.229 19.79 20.4147C19.6043 20.6007 19.3837 20.7482 19.1409 20.8489C18.8981 20.9495 18.6378 21.0013 18.375 21.0013C18.1122 21.0013 17.8519 20.9495 17.6091 20.8489C17.3663 20.7482 17.1457 20.6007 16.96 20.4147L16.9 20.3547C16.6643 20.1242 16.365 19.9696 16.0406 19.9107C15.7162 19.8519 15.3816 19.8916 15.08 20.0247C14.7842 20.1515 14.532 20.362 14.3543 20.6303C14.1766 20.8986 14.0813 21.213 14.08 21.5347V21.7047C14.08 22.2352 13.8693 22.7439 13.4942 23.119C13.1191 23.494 12.6104 23.7047 12.08 23.7047C11.5496 23.7047 11.0409 23.494 10.6658 23.119C10.2907 22.7439 10.08 22.2352 10.08 21.7047V21.6147C10.0723 21.2837 9.96512 20.9627 9.77251 20.6934C9.5799 20.4241 9.31074 20.219 9 20.1047C8.69838 19.9716 8.36381 19.9319 8.03941 19.9907C7.71502 20.0496 7.41568 20.2042 7.18 20.4347L7.12 20.4947C6.93425 20.6807 6.71368 20.8282 6.47088 20.9289C6.22808 21.0295 5.96783 21.0813 5.705 21.0813C5.44217 21.0813 5.18192 21.0295 4.93912 20.9289C4.69632 20.8282 4.47575 20.6807 4.29 20.4947C4.10405 20.309 3.95653 20.0884 3.85588 19.8456C3.75523 19.6028 3.70343 19.3426 3.70343 19.0797C3.70343 18.8169 3.75523 18.5567 3.85588 18.3139C3.95653 18.0711 4.10405 17.8505 4.29 17.6647L4.35 17.6047C4.58054 17.3691 4.73519 17.0697 4.794 16.7453C4.85282 16.4209 4.81312 16.0864 4.68 15.7847C4.55324 15.489 4.34276 15.2367 4.07447 15.059C3.80618 14.8814 3.49179 14.786 3.17 14.7847H3C2.46957 14.7847 1.96086 14.574 1.58579 14.199C1.21071 13.8239 1 13.3152 1 12.7847C1 12.2543 1.21071 11.7456 1.58579 11.3705C1.96086 10.9955 2.46957 10.7847 3 10.7847H3.09C3.42099 10.777 3.742 10.6699 4.0113 10.4773C4.28059 10.2846 4.48572 10.0155 4.6 9.70474C4.73312 9.40313 4.77282 9.06855 4.714 8.74415C4.65519 8.41976 4.50054 8.12042 4.27 7.88474L4.21 7.82474C4.02405 7.639 3.87653 7.41842 3.77588 7.17562C3.67523 6.93283 3.62343 6.67257 3.62343 6.40974C3.62343 6.14691 3.67523 5.88666 3.77588 5.64386C3.87653 5.40107 4.02405 5.18049 4.21 4.99474C4.39575 4.80879 4.61632 4.66127 4.85912 4.56062C5.10192 4.45997 5.36217 4.40817 5.625 4.40817C5.88783 4.40817 6.14808 4.45997 6.39088 4.56062C6.63368 4.66127 6.85425 4.80879 7.04 4.99474L7.1 5.05474C7.33568 5.28528 7.63502 5.43993 7.95941 5.49875C8.28381 5.55757 8.61838 5.51786 8.92 5.38474H9C9.29577 5.25798 9.54802 5.0475 9.72569 4.77921C9.90337 4.51092 9.99872 4.19653 10 3.87474V3.70474C10 3.17431 10.2107 2.6656 10.5858 2.29053C10.9609 1.91546 11.4696 1.70474 12 1.70474C12.5304 1.70474 13.0391 1.91546 13.4142 2.29053C13.7893 2.6656 14 3.17431 14 3.70474V3.79474C14.0013 4.11653 14.0966 4.43092 14.2743 4.69921C14.452 4.9675 14.7042 5.17798 15 5.30474C15.3016 5.43786 15.6362 5.47757 15.9606 5.41875C16.285 5.35993 16.5843 5.20528 16.82 4.97474L16.88 4.91474C17.0657 4.72879 17.2863 4.58127 17.5291 4.48062C17.7719 4.37997 18.0322 4.32817 18.295 4.32817C18.5578 4.32817 18.8181 4.37997 19.0609 4.48062C19.3037 4.58127 19.5243 4.72879 19.71 4.91474C19.896 5.10049 20.0435 5.32107 20.1441 5.56386C20.2448 5.80666 20.2966 6.06691 20.2966 6.32974C20.2966 6.59257 20.2448 6.85283 20.1441 7.09562C20.0435 7.33842 19.896 7.559 19.71 7.74474L19.65 7.80474C19.4195 8.04042 19.2648 8.33976 19.206 8.66415C19.1472 8.98855 19.1869 9.32313 19.32 9.62474V9.70474C19.4468 10.0005 19.6572 10.2528 19.9255 10.4304C20.1938 10.6081 20.5082 10.7035 20.83 10.7047H21C21.5304 10.7047 22.0391 10.9155 22.4142 11.2905C22.7893 11.6656 23 12.1743 23 12.7047C23 13.2352 22.7893 13.7439 22.4142 14.119C22.0391 14.494 21.5304 14.7047 21 14.7047H20.91C20.5882 14.706 20.2738 14.8014 20.0055 14.979C19.7372 15.1567 19.5268 15.409 19.4 15.7047Z"
				stroke="#4C4C4C"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_2_77">
				<rect
					width="24"
					height="24"
					fill="white"
					transform="translate(0 0.704742)"
				/>
			</clipPath>
		</defs>
	</svg>,
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
	</svg>,
];
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
		<div>
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
						<div
							className="searchBar"
							style={{
								flex: 10,
								// border: "1px solid black",
								marginLeft: !open ? "1%" : "0",
								backgroundColor: "#F2F2F2",
								display: "flex",
								justifyItems: "center",
								alignItems: "center",
								height: "45px",
								borderRadius: "10px",
							}}
						>
							<div className="searchIcon" style={{ padding: "10px" }}>
								{iconArray[6]}
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
		</div>
	);
}
