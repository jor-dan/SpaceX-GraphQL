const resolvers = {
  Query: {
    history: (_, { order, sort, id }, { dataSources }) => dataSources.api.history({
      order, sort, id,
    }),

    info: (_, __, { dataSources }) => dataSources.api.info(),

    launch: (_, { id }, { dataSources }) => dataSources.api.launch({ id }),

    launches: (_, {
      range, order, sort, ids,
    }, { dataSources }) => dataSources.api.launches({
      range, order, sort, ids,
    }),

    roadster: (_, __, { dataSources }) => dataSources.api.roadster(),
  },
};

export default resolvers;
