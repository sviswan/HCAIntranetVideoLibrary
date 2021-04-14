import React from 'react';
import VideosList from './videos-list';
import Searchbar from './searchbar';
import TopicVideos from './topic-videos';
import AllVideos from './all-videos';
import FeaturedPlaylist from './featured-playlist';
import VideoPlayer from './../components/video-player';


class App extends React.Component {
  state = {
    selectedVideo : null
  }

  handleVideoSelect = (videoId) =>{
    this.setState({selectedVideo: videoId});
  }

  render() {
    const {videos} = this.props;
    return (
      <>
        <div className="ui menu" style={styles.menubar}>
          <div className="header item"><h3 style={styles.title}>HCA Video Library</h3></div>
          <TopicVideos />
          <AllVideos />
          <div className='divider'></div>
          <div className='menu right'>
            <Searchbar />
          </div>
        </div>

        {/* this.props.videos is an array of 2 elements, first contains 
        featured playlist i.e COVID vaccine pocast. second element is an array of 
        videos list based on keyword/covid/all.*/}
        <div className='container' style={{marginLeft:'130px'}}>
          <div className='ui grid'>
            <div className='ui row'>
              <div className='eight wide column'>
                <FeaturedPlaylist playlist={videos[0].data.items[0]} handleVideoSelect={this.handleVideoSelect}></FeaturedPlaylist>
              </div>
              {/*Video Player component handles playing videos upon user click on video image in the list*/}
              <div className='seven wide column'>
                <div className='ui stuck-container fixed-container'>
                  <div className="ui fixed bottom sticky" style={styles.sticky}>
                    <VideoPlayer video={this.state.selectedVideo}></VideoPlayer>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container' style={styles.itemcontainer}>
          <div className='ui grid'>
            <div className="ui row"> 
              <VideosList videos={videos[1].data.items} handleVideoSelect={this.handleVideoSelect}></VideosList>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default App;

//React CSS styles
const styles ={
  menubar: {
    backgroundColor:'#03173E'
  },
  title: {
    color:'#bfcbe8'
  },
  itemcontainer: {
    margin: '20px'
  },
  sticky: {
    top:'90px',
    width:'400px'
  }
};  