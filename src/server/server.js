import express from 'express';
//import config from '../config';


const app = express();

app.use(express.static('public'));
//used to get data from form submission for the post call.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//index.ejs is served after serving the api calls. 
app.set('view engine', 'ejs');

//importing routes 
require('./routes/api/index')(app);

app.listen(3030, function listenHandler() {
  console.info('Running on 3030...');
});
