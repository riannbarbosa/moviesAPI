import express from 'express';
import swaggerUI from 'swagger-ui-express'

const app = express();

const moviesRouter = require('./routes/moviesList');

import swaggerDocs from '../swagger.json';

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// middleware
app.use(express.json());
app.use('/movies/', moviesRouter);

app.listen(3000);
    