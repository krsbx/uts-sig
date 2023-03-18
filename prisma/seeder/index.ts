import { PrismaClient } from '@prisma/client';
import _ from 'lodash';
import gisSeeder from '../sql';
import { prisma } from './helper';

const passPrisma = (callback: (arg0: PrismaClient) => Promise<void>) =>
  callback(prisma).catch((err) => console.log(err));

const main = async () => {
  return _.map([gisSeeder], passPrisma);
};

main();
