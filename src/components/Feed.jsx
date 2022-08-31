import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchfromApi } from "../utils/fetchFromApi";
import Loader from "./Loader";

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState("New");
	const [isLoading, setIsLoading] = useState(false);
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		setIsLoading(true);
		fetchfromApi(`search?part=snippet&q=${selectedCategory}`).then((data) => {
			setVideos(data.items);
			setIsLoading(false);
		});
	}, [selectedCategory]);

	isLoading && <Loader />;
	if (!videos) return <Loader />;

	return (
		<Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
			<Box
				sx={{
					height: { sx: "auto", md: "92vh" },
					borderRight: "1px solid #3d3d3d",
					px: { sx: 0, md: 2 },
				}}>
				<SideBar
					selectedCategory={selectedCategory}
					setSelectedCategory={setSelectedCategory}
				/>
				<Typography
					className='copyright'
					variannt=' body2'
					sx={{ mt: 1.5, color: "#fff" }}>
					Copyright 2022 prince
				</Typography>
			</Box>
			<Box p={2} sx={{ overflow: "auto", height: "90vh", flex: 2 }}>
				<Typography
					variant='h4'
					fontWeight='bold'
					mb={2}
					sx={{ color: "white" }}>
					{selectedCategory} <span style={{ color: "#F31503" }}>Videos</span>
				</Typography>
				<Videos videos={videos} />
			</Box>
		</Stack>
	);
};

export default Feed;
