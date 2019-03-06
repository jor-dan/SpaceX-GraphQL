import { RESTDataSource } from 'apollo-datasource-rest';
import body from './utils';

class SpaceXAPI extends RESTDataSource {
  baseURL = 'https://api.spacexdata.com/v3/';

  history = ({
    limit, offset, order, sort, id,
  }) => (id ? this.get('history', { id }) : this.get('history', body({
    limit, offset, order, sort,
  })));

  info = () => this.get('info');

  landingpad = ({ id }) => this.get(`landpads/${id}`);

  landingpads = ({ limit, offset }) => this.get('landpads', body({ limit, offset }));

  launch = async ({ id }) => (await this.get('launches', { flight_number: id }))[0];

  launches = async ({
    range, limit, offset, sort, order, ids,
  }) => {
    if (ids) return ids.map(id => this.launch({ id }));
    const launches = await this.get(`launches/${range || ''}`, body({
      limit, offset, order, sort,
    }));
    return Array.isArray(launches) ? launches : [launches];
  }

  launchpad = ({ id }) => this.get(`launchpads/${id}`);

  launchpads = ({ limit, offset }) => this.get('launchpads', body({ limit, offset }));

  mission = ({ id }) => this.get(`missions/${id}`);

  missions = ({ limit, offset }) => this.get('missions', body({ limit, offset }));

  payload = ({ id }) => this.get(`payloads/${id}`);

  payloads = ({
    limit, offset, order, sort,
  }) => this.get('payloads', body({
    limit, offset, order, sort,
  }));

  roadster = () => this.get('roadster');
}

export default SpaceXAPI;
