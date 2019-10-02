import app from '../app';

const port = 8082;

app.listen(port, () => {
  console.log(`server started at ${port}...`);
});

export default app;
