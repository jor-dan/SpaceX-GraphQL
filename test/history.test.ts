import supertest from 'supertest';
import app from '../src/app';

describe('History', () => {
  it('should get all historical events', async () => {
    const res = await supertest(app).post('/graphql')
      .send({ query: '{ history { details } }' });
    expect(res.status).toBe(200);
    expect(res.body.data.history.length).toBeGreaterThanOrEqual(20);
  });

  it('should get historical events 2-4', async () => {
    const res = await supertest(app).post('/graphql')
      .send({ query: '{ history(limit: 3, offset: 1) { id } }' });
    expect(res.status).toBe(200);
    const { history } = res.body.data;
    expect(history).toHaveLength(3);
    expect(history[0]).toHaveProperty('id', 2);
    expect(history[1]).toHaveProperty('id', 3);
    expect(history[2]).toHaveProperty('id', 4);
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
