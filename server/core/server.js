import express from 'express';
import bodyParser from 'body-parser';
import flash from 'connect-flash';
import session from 'express-session';
import cookie from 'cookie-parser';
import path from 'path';
import Data from '../data/index';
import DIContainer from './diContainer';
import cors from 'cors';
import config from '../config';

//let publicAssetsPath = path.resolve(__dirname,  "../public");
let app = express();
app.use(cors());
let routes = DIContainer.resolveRoutes();

//Configure app
Data.seed();
app.use(cookie());
app.use(session({secret : "MagicSecret"}));
app.use(flash());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//app.use(express.static(publicAssetsPath));
routes.init(app); //Issue line

app.listen(config.port, function(){
    console.log(`Coding Soldier listening on port ${config.port}`);
});