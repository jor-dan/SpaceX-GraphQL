import supertest from 'supertest';
import app from '../src/app';

describe('Payloads', () => {
  describe('All Payloads', () => {
    it('should get all payloads', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ payloads { payload_id } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('payloads', expect.any(Array));
      expect(res.body.data.payloads.length).toBeGreaterThanOrEqual(100);
    });
  });

  describe('Single Payload', () => {
    let payload;
    let res;

    beforeAll(async () => {
      res = await supertest(app).post('/graphql')
        .send({ query: '{ payload(id: "ZUMA") { payload_id nationality} }' });
      ({ payload } = res.body.data);
    });

    it('should get a payload', () => {
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('payload', expect.any(Object));
    });

    it('should be ZUMA', () => {
      expect(payload).toHaveProperty('payload_id', 'ZUMA');
      expect(payload).toHaveProperty('nationality', 'United States');
    });
  });
});
