import React from "react";

const VideoCard = ({ videoUrl, title, description }) => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="embed-responsive embed-responsive-16by9 mb-3">
          <iframe
            className="embed-responsive-item"
            src={videoUrl}
            allowFullScreen
            title={title}
          ></iframe>
        </div>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
