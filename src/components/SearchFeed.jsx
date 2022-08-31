import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchfromApi } from "../utils/fetchFromApi";
import Videos from "./Videos";
import Loader from "./Loader";

const SearchFeed = () => {
	const [videos, setVideos] = useState(null);
	const { searchTerm } = useParams();

	useEffect(() => {
		fetchfromApi(`search?part=snippet%2Cid&q=${searchTerm}`).then((data) => {
			setVideos(data.items);
		});
	}, [searchTerm]);

	if (!videos) return <Loader />;

	return (
		<Box p={2} minHeight='95vh'>
			<Typography
				variant='h4'
				fontWeight={900}
				color='white'
				mb={3}
				ml={{ sm: "100px" }}>
				Search Results for{" "}
				<span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
			</Typography>
			<Box display='flex'>
				<Box sx={{ mr: { sm: "100px" } }} />
				{videos && <Videos videos={videos} />}
			</Box>
		</Box>
	);
};

export default SearchFeed;
