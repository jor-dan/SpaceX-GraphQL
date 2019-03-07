import supertest from 'supertest';
import app from '../src/app';

describe('Capsules', () => {
  describe('All Capsules', () => {
    it('should get all capsules', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ capsules { capsule_serial } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('capsules', expect.any(Array));
      expect(res.body.data.capsules.length).toBeGreaterThanOrEqual(18);
    });
  });

  describe('Single Capsule', () => {
    it('should get a Dragon 2', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ capsule(capsule_serial: "C201") { type } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('capsule', expect.any(Object));
      expect(res.body.data.capsule.type).toBe('Dragon 2.0');
    });
  });
});
