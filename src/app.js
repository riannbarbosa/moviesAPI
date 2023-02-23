import express from 'express';
import swaggerUI from 'swagger-ui-express'
import cors from 'cors'

const app = express();

const moviesRouter = require('./routes/moviesList');

import swaggerDocs from './swagger.json';

app.use(cors());
app.options('*', cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// middleware
app.use(express.json());
app.use('/movies/', moviesRouter);

// exporting swagger and app to deployment


module.exports = app;
module.exports = swaggerUi.setup(swaggerDocs, options)