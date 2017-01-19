/** @flow */
import debug from 'debug';

export default (namespace : string) => {
  const ns = `${namespace}`;

  const log = debug(`${ns}:log`);
  const info = debug(`${ns}:info`);
  const warn = debug(`${ns}:warn`);
  const error = debug(`${ns}:error`);

  const logger = { log, info, warn, error };

  Reflect.ownKeys(logger).forEach((k) => {
    logger[k].useColors = true;
  });

  return logger;
};
