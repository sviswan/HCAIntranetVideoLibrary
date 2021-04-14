import React from 'react';

const VideoPlayer = ({video}) => {
  if (!video) {
    return <div></div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video}`;
  return (
    <>
      <div className='video-container'>
        <div className='ui embed'>
          {<iframe src={videoSrc} allowFullScreen title='Video player' style={styles.iframe}/>}
        </div>
      </div>
    </>
  );
};

export default VideoPlayer;

const styles = {
  iframe: {
    border:'3px solid #03173e',
    maxWidth:'120',
    maxHeight:'90',
    width:'100%',
    height:'100%'
  }
};
