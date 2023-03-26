import { AbsoluteFill, staticFile, Video } from "remotion";

export const MyComposition = () => {
	return (
		<AbsoluteFill> 
			<Video src={staticFile("usage.mp4")}/> 
		</AbsoluteFill>
	);
};
