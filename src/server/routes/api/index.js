import config from '../../../config';
import axios from 'axios';
import StateDto from '../../../state-dto/index';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../../../client/components/app';
import helper from './helper';

module.exports = (app) => {

  let searchTerm = '';
  
  /* This end point serves the front end's call to search for 
  videos (all, covid or user specified keyword based.), trigerred by events.*/
  app.post('/search', (req, res)=> {
    searchTerm = req.body.searchTerm;
    if(searchTerm == 'COVID-19 videos') {
      searchTerm = `${config.topic}`;
    }
    if(searchTerm == 'All videos'){
      searchTerm = '';
    }
    res.redirect('/');
  });
      
  /* This end point serves GET calls to the youtube DATA API based on request from 
  the front end. It handles all videos(initial render and subsequent renders), COVID
  videos, ket word search based videos. Following that is the GET call to fetch the
  featured playlist i.e COVID Vaccine Podcast. Then both the responses are stored in
  objects(State DTO) for rendering as well as data structures for ease of access on the front end.
  This also helps with better performance keeping large amounts of data in mind.
  */
  app.get('/', async(req, res)=>{

    /*all videos, covid videos and user searched videos. Since youtube data api only allows atmost 
    50 records in one call, we're fetching all 50. As a content owner upto 500 records are permitted.
    Pagination would be necessary for more than 50 but it would affect performance.
    Since this is a sample application and limited by the free access tokens, 
    I went with 50.*/
    const videosAPIresponse = await axios.get(`${config.baseURL}`+`/search?key=${config.youtubeAPIkey}&channelId=${config.HCAchannelId}&q=${searchTerm}&part=snippet,id&type=video&order=date&maxResults=50`);
    const videoList = new StateDto(videosAPIresponse.data);
     
    //featured playlist i.e COVID vaccine podcast playlist
    const playlistAPIresponse = await axios.get(`${config.baseURL}`+`/playlists?key=${config.youtubeAPIkey}&part=snippet,contentDetails&id=${config.featuredplaylistId}`);
    const playlist = new StateDto(playlistAPIresponse.data);
    
    /*This basic helper module pushes the two GET requests into an array for ease of
    access on the front end. */ 
    const videos = helper(playlist, videoList);
    
    //Object prepared for rendering
    const content = { Markup: ReactDOMServer.renderToString(<App videos={videos}/>), Data: videos };

    /*Triggers serving of index.ejs as the view. */ 
    res.render('index', { ...content});
  });

};