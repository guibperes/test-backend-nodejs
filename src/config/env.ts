import dotenv from 'dotenv';

dotenv.config();

const envToString = (env: string): string => process.env[env] ?? '';

export const Env = {
  MONGO_URL: envToString('MONGO_URL'),
};
