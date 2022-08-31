import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	params: {
		maxResults: 50,
	},
	headers: {
		"X-RapidAPI-Key": "c41c126e1fmsh6424e9af0aa3c3fp112667jsn6bbff1e2813b",
		"X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchfromApi = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);
	return data;
};
