import supertest from 'supertest';
import app from '../src/app';

describe('Missions', () => {
  describe('All Missions', () => {
    it('should get all missions', async () => {
      const res = await supertest(app).post('/graphql')
        .send({ query: '{ missions { mission_id } }' });
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('missions', expect.any(Array));
      expect(res.body.data.missions.length).toBeGreaterThanOrEqual(10);
    });
  });

  describe('Single Mission', () => {
    let mission;
    let res;

    beforeAll(async () => {
      res = await supertest(app).post('/graphql')
        .send({ query: '{ mission(id: "F3364BF") { mission_name payload_ids} }' });
      ({ mission } = res.body.data);
    });

    it('should get a mission', () => {
      expect(res.status).toBe(200);
      expect(res.body.data).toHaveProperty('mission', expect.any(Object));
    });

    it('should be Iridium NEXT', () => {
      expect(mission).toHaveProperty('mission_name', 'Iridium NEXT');
      expect(mission).toHaveProperty('payload_ids', expect.any(Array));
      expect(mission.payload_ids).toHaveLength(8);
    });
  });
});
