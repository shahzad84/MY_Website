import React from "react";
import VideoCard from "./Videocard";
import "./VideoPage.css"; // Import the new CSS file

const VideoPage = () => {
  const videos = [
    {
      videoUrl: "https://www.youtube.com/embed/yQ4-JL8p7nU",
      title: "Video Title 1",
      description: "This is a description for Video 1.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/xdfkxylMDkM",
      title: "Video Title 2",
      description: "This is a description for Video 2.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/7JxOCwVzoTw",
      title: "Video Title 3",
      description: "This is a description for Video 3.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/7JxOCwVzoTw",
      title: "Video Title 4",
      description: "This is a description for Video 4.",
    },
  ];

  return (
    <div className="video-page container mt-4"> {/* Added a unique class */}
      <h1 className="mb-4">My Video Collection</h1>
      <div className="row">
        {videos.map((video, index) => (
          <div className="col-md-6" key={index}>
            <VideoCard
              videoUrl={video.videoUrl}
              title={video.title}
              description={video.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPage;
