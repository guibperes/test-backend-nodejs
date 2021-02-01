import { start, shutdown } from './server';

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

start();
