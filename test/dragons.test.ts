import supertest from 'supertest';
import app from '../src/app';

describe('Dragons', () => {
  describe('All Dragons', () => {
    it('should get both Dragons', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ dragons { id } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('dragons', expect.any(Array));
      expect(res.body.data.dragons).toHaveLength(2);
    });
  });

  describe('Single Dragon', () => {
    it('should get Dragon 2', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ dragon(id: "dragon2") { name type first_flight } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('dragon', expect.any(Object));
      const { dragon } = res.body.data;
      expect(dragon).toHaveProperty('name', 'Dragon 2');
      expect(dragon).toHaveProperty('type', 'capsule');
      expect(dragon).toHaveProperty('first_flight', '2019-03-02');
    });
  });
});
