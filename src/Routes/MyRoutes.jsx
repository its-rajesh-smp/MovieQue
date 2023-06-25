import { Route, Router, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import VideoPlayerPage from "../Pages/VideoPlayerPage/VideoPlayerPage";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/player/:videoId" element={<VideoPlayerPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

export default MyRoutes;
