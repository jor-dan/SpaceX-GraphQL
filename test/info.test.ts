import supertest from 'supertest';
import app from '../src/app';

describe('Info', () => {
  it('should get company info', async () => {
    const res = await supertest(app).post('/graphql')
      .send({ query: '{ info { name } }' });
    expect(res.status).toBe(200);
    expect(res.body.data).toHaveProperty('info', expect.any(Object));
    const { info } = res.body.data;
    expect(info).toHaveProperty('name', 'SpaceX');
  });
});
