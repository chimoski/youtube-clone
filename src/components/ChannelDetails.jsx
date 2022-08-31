import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Video, ChannelCard } from "./";
import { fetchfromApi } from "../utils/fetchFromApi";
import Loader from "./Loader";

const ChannelDetails = () => {
	const [channelDetail, setChannelDetail] = useState(null);
	const [videos, setVideos] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		fetchfromApi(`channels?part=snippet&id=${id}`).then((data) =>
			setChannelDetail(data.items[0])
		);
		fetchfromApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then(
			(data) => {
				setVideos(data.items);
			}
		);
	}, [id]);
	if (!channelDetail || !videos) return <Loader />;
	return (
		<Box minHeight='95vh'>
			<Box>
				<div
					style={{
						height: "300px",
						background:
							"linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
						zIndex: 10,
					}}
				/>
				<ChannelCard channelDetail={channelDetail} marginTop='-110px' />
			</Box>
			<Box p={2} display='flex'>
				<Box sx={{ mr: { sm: "100px" } }} />
				<Video videos={videos} />
			</Box>
		</Box>
	);
};

export default ChannelDetails;
