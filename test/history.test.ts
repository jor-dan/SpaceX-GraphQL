import supertest from 'supertest';
import app from '../src/app';

describe('History', () => {
  it('should get all historical events', async () => {
    const res = await supertest(app).post('/graphql')
      .send({ query: '{ history { details } }' });
    expect(res.status).toBe(200);
    expect(res.body.data.history.length).toBeGreaterThanOrEqual(20);
  });

  it('should get one historical event', async () => {
    const res = await supertest(app).post('/graphql')
      .send({ query: '{ history(id: "20") { details } }' });
    expect(res.status).toBe(200);
    const { history } = res.body.data;
    expect(history).toHaveLength(1);
    expect(history[0]).toHaveProperty('details', expect.any(String));
  });
});
