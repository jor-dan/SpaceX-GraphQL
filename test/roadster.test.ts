import supertest from 'supertest';
import app from '../src/app';

describe('Roadster', () => {
  it('should get Roadster data', async () => {
    const res = await supertest(app).post('/graphql')
      .send({ query: '{ roadster { name } }' });
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('roadster', expect.any(Object));
    const { roadster } = res.body.data;
    expect(roadster).toHaveProperty('name', 'Elon Musk\'s Tesla Roadster');
  });
});
