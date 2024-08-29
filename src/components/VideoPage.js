import React from "react";
import VideoCard from "./Videocard";
import "./VideoPage.css"; // Import the new CSS file

const VideoPage = () => {
  const videos = [
    {
      videoUrl: "https://www.youtube.com/embed/yQ4-JL8p7nU",
      title: "Solving Common Coding Problems",
      description: "An in-depth guide to tackling common coding challenges that developers face daily. This video explores various techniques to break down problems into manageable steps and provides practical examples to help you build strong problem-solving skills.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/xdfkxylMDkM",
      title: "Optimizing Algorithms for Efficiency",
      description: "Learn how to optimize algorithms to improve code performance. This video covers essential concepts such as time complexity, space complexity, and the trade-offs involved in choosing the right algorithm for your application.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/7JxOCwVzoTw",
      title: "Debugging Techniques for Developers",
      description: "Effective strategies for debugging and troubleshooting code. From identifying common error patterns to utilizing advanced debugging tools, this video will help you become more efficient in finding and fixing bugs in your code.",
    },
    {
      videoUrl: "https://www.youtube.com/embed/7JxOCwVzoTw",
      title: "Best Practices in Code Review",
      description: "Explore best practices for conducting thorough code reviews. This video offers insights into how to provide constructive feedback, identify potential issues early, and ensure that your code meets the highest standards of quality and maintainability.",
    },
    
  ];

  return (
    <div className="video-page container mt-4"> {/* Added a unique class */}
      <h1 className="mb-4">My Courses Collection</h1>
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
