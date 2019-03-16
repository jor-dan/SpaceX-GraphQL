import app from './app';

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => res.redirect('/graphql'));

app.listen({ port: PORT }, () => {
  // eslint-disable-next-line no-console
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
});
