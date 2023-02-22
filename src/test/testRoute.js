import request from 'supertest';


const testDelete = 88993;

beforeEach(function (done) {
  setTimeout(function () {
    done();
  }, 1000);
});

describe(`DELETE /movies/id`, function () {
  it('IT should have a status code 204', function (done) {
    request('http://localhost:3000')
      .delete(`/movies/${testDelete}`)
      .expect(204)
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe('GET /movies', function () {
  it('It should have status code 200', function (done) {
    request('http://localhost:3000')
      .get('/movies')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});


describe('GET /movies/id', function () {
  it('It should have status code 200', function (done) {
    request('http://localhost:3000')
      .get('/movies/11161')
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});

describe('POST /movies', function () {
  it('It should have status code 201', function (done) {
    request('http://localhost:3000')
      .post('/movies')
      .send({
        rank: '19',
        title: 'MOVIE TEST'
      })
      .expect(201)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect((res) => {
        if (!res.body.hasOwnProperty('data'))
          throw new Error('Expected Data key!');
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});



describe('PUT /movies/id', function () {
  it('It should have status code 200', function (done) {
    request('http://localhost:3000')
      .put('/movies/87478')
      .send({
        rank: '999',
        title: 'THE MOVIE TEST',
      })
      .expect(200)
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect((res) => {
        if (!res.body.data)
          throw new Error('Expected Data key!');
      })
      .end((err, res) => {
        if (err) {
          done(err);
        } else {
          done();
        }
      });
  });
});