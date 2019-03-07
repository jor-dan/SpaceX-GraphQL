import supertest from 'supertest';
import app from '../src/app';

describe('Cores', () => {
  describe('All Cores', () => {
    it('should get all cores', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ cores { core_serial } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('cores', expect.any(Array));
      expect(res.body.data.cores.length).toBeGreaterThanOrEqual(63);
    });
  });

  describe('Single Core', () => {
    it('should get B1046', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ core(core_serial: "B1046") { core_serial asds_landings } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('core', expect.any(Object));
      const { core } = res.body.data;
      expect(core).toHaveProperty('core_serial', 'B1046');
      expect(core.asds_landings).toBeGreaterThanOrEqual(3);
    });
  });
});
