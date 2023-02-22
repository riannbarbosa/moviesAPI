import express from 'express';
const path = require('path');
import swaggerUI from 'swagger-ui-express'
import cors from 'cors'
import serverless from 'serverless-http'
const router = express.Router();x

const app = express();

const moviesRouter = require('./routes/moviesList');

import swaggerDocs from './swagger.json';

app.use(cors());
app.options('*', cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// middleware
app.use(express.json());
app.use('/movies/', moviesRouter);
app.use('/api-docs', (req, res) => res.sendFile(path.join(__dirname, './index.html')));
app.use('/.netlify/functions/server', router);
module.exports = app;
module.exports.handler = serverless(app);
 