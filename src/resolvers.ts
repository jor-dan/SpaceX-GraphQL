const resolvers = {
  Query: {
    history: (_, {
      limit, offset, order, sort, id,
    }, { dataSources }) => dataSources.api.history({
      limit, offset, order, sort, id,
    }),

    info: (_, __, { dataSources }) => dataSources.api.info(),

    launch: (_, { id }, { dataSources }) => dataSources.api.launch({ id }),

    launches: (_, {
      range, limit, offset, order, sort, ids,
    }, { dataSources }) => dataSources.api.launches({
      range, limit, offset, order, sort, ids,
    }),

    roadster: (_, __, { dataSources }) => dataSources.api.roadster(),
  },
};

export default resolvers;
