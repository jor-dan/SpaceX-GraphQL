import supertest from 'supertest';
import app from '../src/app';

describe('Ships', () => {
  describe('All Ships', () => {
    it('should get all ships', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ ships { ship_id } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('ships', expect.any(Array));
      expect(res.body.data.ships.length).toBeGreaterThanOrEqual(20);
    });
  });

  describe('Single Ship', () => {
    it('should get OCISLY', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ ship(id: "OCISLY") { ship_name } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('ship', expect.any(Object));
      expect(res.body.data.ship).toHaveProperty('ship_name', 'Of Course I Still Love You');
    });
  });
});
