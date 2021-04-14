import React from 'react';
import Moment from 'react-moment';
import config from '../../config';

const FeaturedPlaylist = ({playlist}) => {
  const srcLink=`https://www.youtube.com/embed?listType=playlist&list=${config.featuredplaylistId}`;
  return(
    <div className='item' style={styles.section}>
      <div className="ui relaxed divided items ignored positive icon message">
        <div className='medium image'>
          <iframe src={srcLink} allowFullScreen autoPlay title='Video player' style={styles.iframe}/>
        </div>
        <div className='content' style={{textAlign: 'end'}}>
          <div className='large header'><u>{playlist.snippet.title}</u></div>
          <div className='meta'><b><u>Featured Playlist</u></b></div>
          <div className='meta'>
            Published on: &nbsp;
            <Moment format="MMMM Do, YYYY">
              {playlist.snippet.publishedAt}
            </Moment>
          </div>
          <div className='description'>
            {playlist.snippet.description}
          </div>
        </div>
      </div> 
    </div>
  );

};
 
export default FeaturedPlaylist;

const styles={
  iframe: {
    border:'3px solid #03173e',
    maxWidth:'640',
    maxHeight:'480',
    width:'100%',
    height:'100%'
  },
  section: {
    margin:'10px'
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