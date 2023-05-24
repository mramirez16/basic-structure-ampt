import pino from "pino";
const log = pino();

const logger = {
  info(message, object) {
    log.info(message + object);
  },
  warn(message, object) {
    log.warn(message + object);
  },
  error(message, object) {
    log.error(message + object);
  },
};

export default logger;
