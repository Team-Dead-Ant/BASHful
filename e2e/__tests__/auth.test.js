const request = require('../request');
const { dropCollection } = require('../db');

describe('Auth API', () => {
  
  beforeEach(() => dropCollection('users'));

  const userData = {
    email: 'user@user.com',
    password: 'abc123',
    roles: [],
    name: 'Evan',
    gender: 'male',
    age: 27,
    genderPref: 'female'
  };


  it('signs up a user', () => {
    return request
      .post('/api/auth/signup')
      .send(userData)
      .expect(200)
      .then(({ body }) => body)
      .then(user => {
        expect(user.token).toBeDefined();
      });
  });

  it('signs in a user', () => {
    return request
      .post('/api/auth/signup')
      .send(userData)
      .expect(200)
      .then(() => {
        return request
          .post('/api/auth/signin')
          .send(userData)
          .expect(200)
          .then(({ body }) => {
            expect(body.token).toBeDefined();
          });
      });
  });
});
