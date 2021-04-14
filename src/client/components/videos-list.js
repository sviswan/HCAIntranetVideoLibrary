import React from 'react';
import VideoItem from './video-item';

const VideosList = ({videos, handleVideoSelect}) => {
  const renderedVideos = videos.map((video) => {
    return <VideoItem key ={video.id.videoId} video ={video} handleVideoSelect={handleVideoSelect} />;
  });
  return (<div className="ui container">
    <div className="ui relaxed divided items">
      {renderedVideos}
    </div>
  </div>
  );
};

export default VideosList;