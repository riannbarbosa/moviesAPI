import express from 'express';
/* import swaggerUI from 'swagger-ui-express' */
import path from 'path'
import cors from 'cors'

const app = express();

const moviesRouter = require('./routes/moviesList');

/* import swaggerDocs from './swagger.json'; */

// middleware
app.use(express.json());
app.use('/movies/', moviesRouter);

app.use(cors());
app.options('*', cors());

/* const options = {
    customCss: '.swagger-ui .topbar { display: none }'
}
 */

app.use('/swagger-ui', express.static(path.join(__dirname, 'node_modules/swagger-ui-dist')));

app.get('/api-docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'swagger-ui.html'));
});
  
/* app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs, options)); */



// exporting swagger and app to deployment

module.exports = app;