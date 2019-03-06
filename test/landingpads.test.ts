import supertest from 'supertest';
import app from '../src/app';

describe('Landingpads', () => {
  describe('All Landingpads', () => {
    it('should get all landingpads', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ landingpads { full_name } }' });
      expect(res.status).toBe(200);
      expect(res.body.data.landingpads.length).toBeGreaterThanOrEqual(7);
    });
  });

  describe('Single Landingpad', () => {
    let landingpad;
    let res;

    beforeAll(async () => {
      res = await supertest(app).post('/graphql')
        .send({ query: '{ landingpad(id: "LZ-1") { full_name location { region } } }' });
      ({ landingpad } = res.body.data);
    });

    it('should get a landingpad', () => {
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('landingpad', expect.any(Object));
    });

    it('should be LZ-1', () => {
      expect(landingpad).toHaveProperty('full_name', 'Landing Zone 1');
      expect(landingpad).toHaveProperty('location.region', 'Florida');
    });
  });
});
