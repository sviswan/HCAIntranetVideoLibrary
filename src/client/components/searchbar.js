import React, { Component } from 'react';

class Searchbar extends Component {
  render(){
    return(
      <div className="item">
        <div className="ui transparent inverted icon input visible">
          <form method='POST' action='/search'>
            <input type='text' placeholder='Search videos' name='searchTerm'/>
            <i className="search icon"></i>
          </form>
        </div>
      </div>
    );
  }
}

export default Searchbar;