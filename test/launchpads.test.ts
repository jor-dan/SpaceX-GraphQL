import supertest from 'supertest';
import app from '../src/app';

describe('Launchpads', () => {
  describe('All Launchpads', () => {
    it('should get all launchpads', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ launchpads { site_id } }' });
      expect(res.status).toBe(200);
      expect(res.body.data.launchpads.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe('Single Launchpad', () => {
    let launchpad;
    let res;

    beforeAll(async () => {
      res = await supertest(app).post('/graphql')
        .send({ query: '{ launchpad(id: "ksc_lc_39a") { site_id location { region } } }' });
      ({ launchpad } = res.body.data);
    });

    it('should get a launchpad', () => {
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('launchpad', expect.any(Object));
    });

    it('should be pad 39A', () => {
      expect(launchpad).toHaveProperty('site_id', 'ksc_lc_39a');
      expect(launchpad).toHaveProperty('location.region', 'Florida');
    });
  });
});
