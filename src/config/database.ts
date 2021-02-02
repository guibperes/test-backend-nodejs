import { ConnectionManager, Connection, ObjectType } from 'typeorm';

import { Env } from './env';
import { logger } from '../lib';
import { Product } from '../module';

const manager = new ConnectionManager();

const createConnection = (): Connection =>
  manager.create({
    type: 'mongodb',
    url: Env.MONGO_URL,
    synchronize: true,
    logging: true,
    useUnifiedTopology: true,
    entities: [Product],
  });

const getConnection = () => manager.get();

const getRepository = <T>(repositoryClass: ObjectType<T>) =>
  getConnection().getCustomRepository(repositoryClass);

const connect = async () => {
  try {
    const connection = createConnection();
    await connection.connect();

    logger.info('Connected on database');
  } catch (error) {
    logger.error('Cannot connect on database');
    logger.error(error);

    process.exit(1);
  }
};

const disconnect = async () => {
  try {
    const connection = getConnection();
    await connection.close();

    logger.info('Disconnected on database');
  } catch (error) {
    logger.error('Cannot disconnect on database');
    logger.error(error);

    process.exit(1);
  }
};

export const Database = { connect, disconnect, getRepository, getConnection };
