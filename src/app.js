import express from 'express';
import path from 'path'
import cors from 'cors'

const app = express();

const moviesRouter = require('./routes/moviesList');


// middleware
app.use(express.json());
app.use('/movies/', moviesRouter);

app.use(cors());
app.options('*', cors());


app.use('/swagger-ui', express.static(path.join(__dirname, '../node_modules/swagger-ui-dist')));

app.get('/api-docs', (req, res) => {
    res.sendFile(path.join(__dirname, 'swagger-ui.html'));
});
  



// exporting swagger and app to deployment

module.exports = app;