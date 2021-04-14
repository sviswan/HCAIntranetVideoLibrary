import React from 'react';
import Moment from 'react-moment';

const VideoItem = ({video, handleVideoSelect}) => {
  return(
    <>
      <div className='item' onClick={ () => handleVideoSelect(video.id.videoId)}>
        <div className='ui medium image'>
          <img src={video.snippet.thumbnails.high.url} style={styles.pointer}/>
        </div>
        <div className='content'>
          <div className='header'>{video.snippet.title}</div>
          <div className='meta'>
          Published on: &nbsp;
            <Moment format="MMMM Do, YYYY">
              {video.snippet.publishedAt}
            </Moment>
          </div>
          <div className='description'>
            {video.snippet.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoItem;

const styles={
  iframe: {
    border:'3px solid #03173e',
    maxWidth:'640',
    maxHeight:'480',
    width:'100%',
    height:'100%'
  },
  section: {
    margin:'113px'
  },
  pointer: {
    cursor: 'pointer'
  },
  playbutton: {
    position:'absolute',
    fontSize:'15px',
    color:'#e85822',
    cursor: 'pointer'
  },
  close: {
    cursor: 'pointer',
    display: 'none',
    fontSize:'15px',
    color:'#e85822'
  }
};