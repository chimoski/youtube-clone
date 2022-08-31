import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
	return (
		<Stack
			direction={direction || "row"}
			flexWrap='wrap'
			justifyContent='start'
			gap={2}>
			{videos.map((video, idx) => (
				<Box key={idx}>
					{video.id.videoId && <VideoCard videos={video} />}
					{video.id.channelId && <ChannelCard channelDetail={video} />}
				</Box>
			))}
		</Stack>
	);
};

export default Videos;
