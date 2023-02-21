import express from 'express';
import swaggerUI from 'swagger-ui-express'
import cors from 'cors'
import serverless from 'serverless-http'

app.use(cors());


const PORT = 3000;

const app = express();

const moviesRouter = require('./routes/moviesList');

import swaggerDocs from '../swagger.json';

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

// middleware
app.use(express.json());
app.use('/movies/', moviesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);
