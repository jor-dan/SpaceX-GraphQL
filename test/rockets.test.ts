import supertest from 'supertest';
import app from '../src/app';

describe('Rockets', () => {
  describe('All Rockets', () => {
    it('should get all rockets', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ rockets { rocket_name } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('rockets', expect.any(Array));
      expect(res.body.data.rockets.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe('Single Rocket', () => {
    it('should get Falcon Heavy', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ rocket(id: "falconheavy") { rocket_name boosters stages } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('rocket', expect.any(Object));
      const { rocket } = res.body.data;
      expect(rocket).toHaveProperty('rocket_name', 'Falcon Heavy');
      expect(rocket).toHaveProperty('boosters', 2);
      expect(rocket).toHaveProperty('stages', 2);
    });
  });
});
