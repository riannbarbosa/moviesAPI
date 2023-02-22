import express from 'express';

const router = express.Router();

import {
    getMovies,
    checkID,
    getMoviesById,
    createMovie,
    deleteMoviesById,
    checkBody,
    updateMoviesById,
} from '../controller/moviesController';

router.param('id', checkID);
router.route('/')
.post(checkBody, createMovie)
.get(getMovies);

router.route('/:id')
.get(getMoviesById)
.delete(deleteMoviesById)
.put(updateMoviesById);


module.exports = router;
