import { useNavigate, useParams } from "react-router-dom";
import VideoPlayer from "../../Components/Video Page/VideoPlayer/VideoPlayer";
import "./VideoPlayerPage.css";
import DATA from "../../Firebase/DATA";
import { TMDB_IMG } from "../../Firebase/API_URL";
function VideoPlayerPage() {
  const navigate = useNavigate();
  const { videoId } = useParams();
  const onClickBackGoToHome = () => {
    navigate("/");
  };
  const [currentVideo] = DATA.filter((movie) => {
    return movie.id == videoId;
  });

  return (
    <div
      style={{ backgroundImage: `url(${TMDB_IMG}${currentVideo.backdrop})` }}
      className="VideoPlayerPage remove_header"
    >
      <VideoPlayer currentVideo={currentVideo} />
      <button onClick={onClickBackGoToHome}>BACK</button>
    </div>
  );
}

export default VideoPlayerPage;
