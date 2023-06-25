import { useState } from "react";
import { TMDB_IMG, TMDB_POSTER_HIGH } from "../../../Firebase/API_URL";
import "./VideoPlayer.css";
function VideoPlayer(props) {
  const [loadVideo, setLoadVideo] = useState(true);

  return (
    <>
      <video
        hidden={loadVideo}
        onLoadedData={() => {
          setLoadVideo(false);
        }}
        className="videoPlayer"
        controls
        onLoadStart={() => {
          setLoadVideo(true);
        }}
        src={props.currentVideo.videoLink}
      ></video>
      {loadVideo && (
        <div
          style={{
            backgroundImage: `url(${TMDB_IMG}${props.currentVideo.backdrop})`,
          }}
          className="videoPlayerLoader"
        >
          <i className="bx bx-loader-circle bx-spin"></i>
        </div>
      )}
    </>
  );
}

export default VideoPlayer;
