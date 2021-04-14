import React from 'react';

const TopicVideos = () => {
  return (
    <div>
      <a className='item'>
        <form method='POST' action='/search'>
          <input type='submit' name='searchTerm' value='COVID-19 videos' className='ui inverted button' style={styles.button}/>
        </form>
      </a>
    </div>
  );
};


export default TopicVideos;

//React CSS styles
const styles ={
  button :{
    color:'#bfcbe8'
  }  
};