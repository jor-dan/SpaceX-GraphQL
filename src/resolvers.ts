const resolvers = {
  Query: {
    capsule: (_, { capsule_serial }, { dataSources }) => dataSources.api.capsule({
      capsule_serial,
    }),

    capsules: (_, {
      range, limit, offset, order, sort,
    }, { dataSources }) => dataSources.api.capsules({
      range, limit, offset, order, sort,
    }),

    core: (_, { core_serial }, { dataSources }) => dataSources.api.core({ core_serial }),

    cores: (_, {
      limit, offset, order, sort,
    }, { dataSources }) => dataSources.api.cores({
      limit, offset, order, sort,
    }),

    history: (_, {
      limit, offset, order, sort, id,
    }, { dataSources }) => dataSources.api.history({
      limit, offset, order, sort, id,
    }),

    info: (_, __, { dataSources }) => dataSources.api.info(),

    landingpad: (_, { id }, { dataSources }) => dataSources.api.landingpad({ id }),

    landingpads: (_, { limit, offset }, { dataSources }) => dataSources.api.landingpads({
      limit, offset,
    }),

    launch: (_, { id }, { dataSources }) => dataSources.api.launch({ id }),

    launches: (_, {
      range, limit, offset, order, sort, ids,
    }, { dataSources }) => dataSources.api.launches({
      range, limit, offset, order, sort, ids,
    }),

    launchpad: (_, { id }, { dataSources }) => dataSources.api.launchpad({ id }),

    launchpads: (_, { limit, offset }, { dataSources }) => dataSources.api.launchpads({
      limit, offset,
    }),

    mission: (_, { id }, { dataSources }) => dataSources.api.mission({ id }),

    missions: (_, { limit, offset }, { dataSources }) => dataSources.api.missions({
      limit, offset,
    }),

    payload: (_, { id }, { dataSources }) => dataSources.api.payload({ id }),

    payloads: (_, {
      limit, offset, order, sort,
    }, { dataSources }) => dataSources.api.payloads({
      limit, offset, order, sort,
    }),

    roadster: (_, __, { dataSources }) => dataSources.api.roadster(),

    ship: (_, { id }, { dataSources }) => dataSources.api.ship({ id }),

    ships: (_, {
      limit, offset, order, sort,
    }, { dataSources }) => dataSources.api.ships({
      limit, offset, order, sort,
    }),
  },
};

export default resolvers;
