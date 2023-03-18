import parser from '@krsbx/prisma-fqp';
import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import gisRoutes from '../routes';

const main = (app: Express) => {
  app.use(helmet());
  app.use(express.json({ limit: '5mb' }));
  app.use(express.urlencoded({ limit: '5mb', extended: true }));
  app.use(express.static('public'));
  app.use(cors());

  app.get('*', (req, res, next) => {
    if (req.filters) {
      req.filterQueryParams = parser(req.filters);
      delete req.filters;
    }

    next();
  });
  app.use('/', gisRoutes);
};

export default main;
