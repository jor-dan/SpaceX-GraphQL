import body from '../src/utils';

describe('Request body generation', () => {
  const order = 'desc';
  const sort = 'flight_number';

  it('should put in order and sort parameters', () => {
    const actual = body({ order, sort });
    expect(actual).toHaveProperty('order', order);
    expect(actual).toHaveProperty('sort', sort);
  });

  it('should not put in missing order parameter', () => {
    expect(body({ sort })).not.toHaveProperty('order');
  });

  it('should not put in missing sort parameter', () => {
    expect(body({ order })).not.toHaveProperty('sort');
  });
});
