import supertest from 'supertest';
import app from '../src/app';

describe('Launches', () => {
  let launches;
  let res;

  describe('All Launches', () => {
    beforeAll(async () => {
      res = await supertest(app).post('/graphql')
        .send({ query: '{ launches(order: desc) { flight_number } }' });
      ({ launches } = res.body.data);
    });

    it('should get all launches', () => {
      expect(res.status).toBe(200);
      expect(launches.length).toBeGreaterThanOrEqual(91);
    });

    it('should be in descending order', () => {
      expect(launches[0].flight_number > launches[1].flight_number).toBe(true);
    });
  });

  describe('Specific Launches', () => {
    beforeAll(async () => {
      res = await supertest(app).post('/graphql')
        .send({ query: '{ launches(ids: ["75", "80"]) { flight_number } }' });
      ({ launches } = res.body.data);
    });

    it('should get two launches', () => {
      expect(res.status).toBe(200);
      expect(launches).toHaveLength(2);
    });

    it('should be in ascending order', () => {
      expect(launches[0].flight_number < launches[1].flight_number).toBe(true);
    });
  });

  describe('Single Launch', () => {
    let launch;

    beforeAll(async () => {
      res = await supertest(app).post('/graphql')
        .send({ query: '{ launch(id: "55") { flight_number mission_name } }' });
      ({ launch } = res.body.data);
    });

    it('should be Falcon Heavy test flight', () => {
      expect(res.status).toBe(200);
      expect(launch.flight_number).toBe(55);
      expect(launch.mission_name).toBe('Falcon Heavy Test Flight');
    });

    it('should only have requested fields', () => {
      expect(launch).toEqual({
        flight_number: expect.any(Number),
        mission_name: expect.any(String),
      });
    });
  });

  describe('Next Launch', () => {
    beforeAll(async () => {
      res = await supertest(app).post('/graphql')
        .send({ query: '{ launches(range: next) { launch_success upcoming } }' });
      ({ launches } = res.body.data);
    });

    it('should get one launch', () => {
      expect(launches).toHaveLength(1);
    });

    it('should be in the future', () => {
      expect(launches[0].upcoming).toBe(true);
    });

    it('should have null launch success', () => {
      expect(launches[0].launch_success).toBeNull();
    });
  });
});
