import { Router } from 'express';
import { asyncMw } from 'express-asyncmw';
import repository from '../repository';
import { createGetsResponse } from '../utils/responses';

const router = Router();

// GET /kantor-poss
router.get(
  '/kantor-poss',
  asyncMw(async (req, res, next) => {
    const kantorPoss = await repository.KantorPos.findAll({}, {}, req.query);

    return res.status(200).send(createGetsResponse(req, kantorPoss));
  })
);

// GET /kantor-plns
router.get(
  '/kantor-plns',
  asyncMw(async (req, res, next) => {
    const kantorPlns = await repository.KantorPln.findAll({}, {}, req.query);

    return res.status(200).send(createGetsResponse(req, kantorPlns));
  })
);

// GET /kantor-pln
router.get(
  '/spbus',
  asyncMw(async (req, res, next) => {
    const spbus = await repository.Spbu.findAll({}, {}, req.query);

    return res.status(200).send(createGetsResponse(req, spbus));
  })
);

export default router;
