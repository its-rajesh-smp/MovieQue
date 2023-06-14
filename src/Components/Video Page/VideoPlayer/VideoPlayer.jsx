import "./VideoPlayer.css";
function VideoPlayer() {
  return (
    <video
      className="videoPlayer"
      controls
      src="https://firebasestorage.googleapis.com/v0/b/movieque-fc953.appspot.com/o/myvideo.mp4?alt=media&token=38f986d3-03e3-4b1f-806b-102b3f456da3"
    ></video>
  );
}

export default VideoPlayer;
