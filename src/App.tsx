import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout";
import Home from "./pages/home";
import VideoPage from "./pages/videoPage";
import AdminVideos from "./pages/AdminVideos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:slug" element={<VideoPage />} />
        </Route>
        <Route path="/adminVideos" element={<AdminVideos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
