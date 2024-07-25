const request = require('request');
const { expect } = require('chai');

describe('Index page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code', (done) => {
    request.get(API_URL, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(API_URL, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should retun correct content type', (done) => {
    request.get(API_URL, (error, response) => {
      expect(response.headers['content-type']).to.include('text/html');
      done();
    });
  });
});


describe('Cart page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return correct status code when :id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct result when :id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return 404 status code when :id is NOT a number', (done) => {
    request.get(`${API_URL}/cart/hello`, (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});

describe('Login page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return the correct response', (done) => {
    const options = {
      url: `${API_URL}/login`,
      json: { userName: 'Nick' }
    };
    request.post(options, (error, response, body) => {
      if (error) {
        console.error('Error:', error);
        return done(error);
      }
      console.log('Status Code:', response.statusCode);
      console.log('Body:', body);
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Nick');
      done();
    });
  });
});


describe('Available payment page', () => {
  const API_URL = 'http://localhost:7865';

  it('should return the correct response', (done) => {
    request.get(`${API_URL}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      const payments = JSON.parse(body);
      expect(payments).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});
