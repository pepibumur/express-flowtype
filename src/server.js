/** @flow */
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import BlueBird from 'bluebird';
import models, { User } from './models';

global.Promise = BlueBird;

const port = 8000;

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sleep = (sleepTime : number = 2000) => new Promise((res) => {
  setTimeout(() => res(), sleepTime);
});

app.use('/users', async (req: express$Request, res: express$Response) => {
  const start = Date.now();

  // Sequentially
  await sleep();
  const users = await User.findAll();

  // Wait for both
  // const [users] = await Promise.all([User.findAll(), sleep()]);

  const duration = Date.now() - start;
  res.json({ responseTime: duration, users });
});

/* eslint-disable no-console */
models.sync().catch((err) => console.error(err.stack)).then(() => {
  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}/`);
  });
});
/* eslint-enable no-console */

export default app; // for testing
