import React from 'react';

const AllVideos = () => {
  return (
    <div>
      <a className='item'>
        <form method='POST' action='/search'>
          <input type='submit' name='searchTerm' value='All videos' className='ui inverted button' style={styles.button}/>
        </form>
      </a>
    </div>
  );
};


export default AllVideos;

//React CSS styles
const styles ={
  button :{
    color:'#bfcbe8'
  }  
};