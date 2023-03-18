import { PrismaClient } from '@prisma/client';
import fs from 'fs-extra';
import _ from 'lodash';
import path from 'path';
import { SEED_HISTORY_NAME } from '../seeder/constants';
import { joinSqlFiles } from './helper';

const main = async (prisma: PrismaClient) => {
  const seedStatus = await prisma.seedHistory.findFirst({
    where: {
      name: SEED_HISTORY_NAME.GIS_SEEDING,
    },
  });

  if (seedStatus) {
    console.log('Seeded GIS Data already exists in DB');
    console.log('Skipping Seeding GIS Data to DB');

    return;
  }

  try {
    const dirs = (await fs.readdir(__dirname)).filter(
      (fileName) => fileName.split('.').pop() === 'sql'
    );

    const sqls = await joinSqlFiles(
      ...dirs.map((name) => path.join(__dirname, name))
    );

    if (!sqls) return;

    await Promise.all(_.map(sqls, (sql) => prisma.$executeRawUnsafe(sql)));

    await prisma.seedHistory.create({
      data: {
        name: SEED_HISTORY_NAME.GIS_SEEDING,
      },
    });

    console.log('Seeding GIS Data completed');
  } catch (err) {
    console.log(err);
    console.log('Error while seeding GIS Data in DB');
  }
};

export default main;
