const request = require('supertest')
const app = require('../index')
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .get('/5')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('get')
  })
})