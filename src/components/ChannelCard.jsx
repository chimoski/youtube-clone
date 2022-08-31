import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";
import Loader from "./Loader";

const channelCard = ({ channelDetail, marginTop }) => {
	if (!channelDetail) return <Loader/>
		return (
			<Box
				sx={{
					boxShadow: "none",
					bordeRadius: "20px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					width: { xs: "100%", sm: "300px", md: "262px" },
					height: "326px",
					margin: "auto",
					marginTop,
				}}>
				<Link to={`/channel/${channelDetail?.id?.channelId}`}>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							textAlign: "center",
							color: "#FFF",
						}}>
						<CardMedia
							image={
								channelDetail?.snippet?.thumbnails?.high?.url ||
								demoProfilePicture
							}
							alt={channelDetail?.snippet?.title}
							sx={{
								borderRadius: "50%",
								height: "180px",
								width: "180px",
								mb: 2,
								border: "1px solid #e3e3e3",
							}}
						/>
						<Typography variant='h6'>
							{channelDetail?.snippet?.title}
							<CheckCircleIcon
								sx={{ fontSize: "14px", color: "gray", ml: "5px" }}
							/>
						</Typography>
						{channelDetail?.statistics?.subscriberCount && (
							<Typography>
								{parseInt(
									channelDetail?.statistics?.subscriberCount
								).toLocaleString()}{" "}
								subscribers
							</Typography>
						)}
					</CardContent>
				</Link>
			</Box>
		);
};

export default channelCard;
