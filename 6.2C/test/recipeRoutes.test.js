const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

const { expect } = chai;
chai.use(chaiHttp);

describe('Recipe API Endpoint', () => {
  it('should return the correct recipe count', (done) => {
    chai.request(app)
      .get('/api/recipes/count')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.count).to.equal(2);
        done();
      });
  });

  it('should return a number as count', (done) => {
    chai.request(app)
      .get('/api/recipes/count')
      .end((err, res) => {
        expect(res.body.count).to.be.a('number');
        done();
      });
  });
});
