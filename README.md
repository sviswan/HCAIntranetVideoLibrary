# HCAIntranetVideoLibrary

This is a full stack Isomorphic application that I built from scratch using following technologies:
- REACT JS (Front end)
- EXPRESS JS FRAMEWORK (Node.js) Server (Back-end)
- Webpack Bundler
- Babbel loader
- Semantic UI and React CSS
- ES Lint
- Visual Studio Code Editor
- Many more libraries and dependencies. For version details go to package.json.

Directory Structure:
- package.json, webpack.config.js, babel.rc and src/config.js (configuration files)
- views/index.ejs (served by express);
Under src/
-server/server.js,
-server/routes/api/index,
-server/router/api/helper (API end points and routing duties on the server side)
-state-dto/index.js (Data to Object mapping)
-renderers/dom.js (renders on the front end)
-client/components/
     	- app.js
     	- all-videos.js
     	- featured-playlists.js
	- searchbar.js
	- topic-videos.js
	- topic-item.js
	- video-item.js
	- videos-list.js
	- video-player.js

Instructions:
     - npm install 
     - npm run dev 
       ("dev": "nodemon --exec babel-node src/server/server.js")
     - npm run webpack 
       ("webpack": "webpack --watch")
Ensure node-modules folder is generated with all dependencies from package.json. Please note that both client and server i.e dev and webpack scripts can be run simultaneously on 2 terminals to serve the application on both client and server side. The app is hosted on http://localhost:3030.(port can be changed at server/server.js)


API end points Details:
1. //GET call for all HCA videos latest first
  //const response = await axios.get(`${config.baseURL}/search?key=${config.youtubeAPIkey}&channelId=${config.HCAchannelId}&part=snippet,id&type=video&order=date&maxResults=50`);

2. //GET call for COVID videos only (calls based on keywords set in config file as covid, covid-19 and pandemic)
  //const response = await axios.get(`${config.baseURL}/search?key=${config.youtubeAPIkey}&channelId=${config.HCAchannelId}&q=${config.topic}&part=snippet,id&type=video&order=date&maxResults=50`);
  
3. //GET call for search with keyword
  //const response = await axios.get(`${config.baseURL}/search?key=${config.youtubeAPIkey}&channelId=${config.HCAchannelId}&q=${App.searchkey}&part=snippet,id&type=video&order=date&maxResults=50`);
  
JSON Response Object:
{
  "kind": "youtube#searchListResponse",
  "etag": "7Hrkyji5y7HbNRL3vjMP5UQiX68",
  "nextPageToken": "CBQQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 236,
    "resultsPerPage": 20
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "MgtIak8JNdzfZmVIhry8MdVIhEY",
      "id": {
        "kind": "youtube#video",
        "videoId": "S_uBk-YdXuo"
      },
      "snippet": {
        "publishedAt": "2021-04-08T20:36:20Z",
        "channelId": "UCL03ygcTgIbe36o2Z7sReuQ",
        "title": "Pandemic Parenting",
        "description": "Frank Drummond, MD, MBA, HCA Healthcare Chief Medical Officer, Psychiatry discusses pandemic parenting with Jeffrey Cluver, MD, MBA, Trident Health ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/S_uBk-YdXuo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/S_uBk-YdXuo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/S_uBk-YdXuo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "HCAHealthcare",
        "liveBroadcastContent": "none",
        "publishTime": "2021-04-08T20:36:20Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "HA4qgSzutK96I_xEIcfOydRIso4",
      "id": {
        "kind": "youtube#video",
        "videoId": "p6HmvYPZqt8"
      },
      "snippet": {
        "publishedAt": "2021-04-08T20:35:27Z",
        "channelId": "UCL03ygcTgIbe36o2Z7sReuQ",
        "title": "Caregiver Resiliency",
        "description": "Frank Drummond, MD, MBA, HCA Healthcare Chief Medical Officer, Psychiatry discusses caregiver resiliency with Christopher Ott, MD, FACEP, HCA Healthcare ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/p6HmvYPZqt8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/p6HmvYPZqt8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/p6HmvYPZqt8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "HCAHealthcare",
        "liveBroadcastContent": "none",
        "publishTime": "2021-04-08T20:35:27Z"
      }
    },......]
}


2. //GET call for COVID-19 Vaccine Podcast Series Playlist
  //const response = await axios.get(`${config.baseURL}/playlists?key=${config.youtubeAPIkey}&part=snippet,contentDetails&id=${config.featuredplaylistId}`);
  
JSON Response Object:
{
  "kind": "youtube#playlistListResponse",
  "etag": "XET4ub3-RcO8F9EOZGF-fyjkO3I",
  "pageInfo": {
    "totalResults": 1,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#playlist",
      "etag": "c6_drCSCjYWTbWL3-7ZcpUAxhXw",
      "id": "PLogA9DP2_vSekxHP73PXaKD6nbOK56CJw",
      "snippet": {
        "publishedAt": "2021-01-14T23:05:29Z",
        "channelId": "UCL03ygcTgIbe36o2Z7sReuQ",
        "title": "COVID-19 Vaccine Podcast Series",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/cpNUffrP5DI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/cpNUffrP5DI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/cpNUffrP5DI/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/cpNUffrP5DI/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/cpNUffrP5DI/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "HCAHealthcare",
        "localized": {
          "title": "COVID-19 Vaccine Podcast Series",
          "description": ""
        }
      },
      "contentDetails": {
        "itemCount": 5
      },
      "player": {
        "embedHtml": "\u003ciframe width=\"640\" height=\"360\" src=\"http://www.youtube.com/embed/videoseries?list=PLogA9DP2_vSekxHP73PXaKD6nbOK56CJw\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen\u003e\u003c/iframe\u003e"
      }
    }
  ]
}

5. POST calls from React front end to Express Server with 'Search Key' data.

Considerations:
There are a few improvement considerations for this application. 
- Error handling for various code from Youtube Data API needs to be incorporated.
- Information displaying user search result type can be displayed for better UI/UX.
- I wrote a few JEST tests but could not do it extensively in the given time and prioritized given requirements. Multiple test cases including data type checks need to be incorporated.
- The pop-up iframe video could use a close button.
.... and others

Please feel free to reach out to me, if you need any more information or run into any issues while getting it up and running on your machine.
Thank you!

