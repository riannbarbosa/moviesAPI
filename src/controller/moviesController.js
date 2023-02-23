// import fs
import fs from 'fs';
const moviesData = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/movies.json`)
);

exports.checkID = (req, res, next, val) => {
  if (req.params.id * 1 < moviesData.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  next();
};


exports.checkBody = (req, res, next) => {
  if (!req.body.title || !req.body.rank) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing title or rank',
    });
  }
  next();
};  

//  GET /movies → Lista todos os filmes
exports.getMovies = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    results: moviesData.length,
    data: moviesData,
  });
};

// GET /movies/id_do_filme → Lista um filme
exports.getMoviesById = (req, res, next) => {
  const idMovies = req.params.id * 1;
  const getId = moviesData.find(el => el.id === idMovies);
  res.status(200).json({
    status: 'success',
    data: {
      getId,
    },
  });
};

//  DELETE /movies/id_do_filme - Remove um filme
exports.deleteMoviesById = (req, res, next) => {
  const idMovies = req.params.id * 1;
  const getId = moviesData.find(el => el.id === idMovies);
  const updatedMovies = moviesData.indexOf(getId);
  moviesData.splice(updatedMovies, 1);

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

//  POST /movies/ - cria um filme
exports.createMovie = (req, res, next) => {
  const randomm = Math.floor(Math.random() * 200);
  const lastObj = moviesData[moviesData.length - 1];
  const currId = parseInt(lastObj.id);
  const newId = currId + randomm;
  lastObj.id = newId;

  const newMovie = Object.assign({ id: newId }, req.body);
  moviesData.push(newMovie);

  fs.writeFile(
    `${__dirname}/../data/movies.json`,
    JSON.stringify(moviesData),
    err => {
      res.status(201).json({
        status: 'success',
        data: {
          newMovie,
        },
      });
    }
  );
};

// PUT movies/id_do_filme → Atualiza
exports.updateMoviesById = (req, res, next) => {
  const idMovies = req.params.id;
  const updateMovie = req.body;
  const getIndex = moviesData.findIndex(src => src.id == idMovies);

  if (getIndex === -1) {
    return res.status(404).json({
      status: 'fail',
      message: `${idMovies} Not Found :(`,
    });
  }

  moviesData[getIndex] = { ...moviesData[getIndex], ...updateMovie };
  fs.writeFile(
    `${__dirname}/../data/movies.json`,
    JSON.stringify(moviesData),
    err => {
      res.status(200).json({
        status: 'success',
        data: moviesData[getIndex],
      });
    }
  );
};
