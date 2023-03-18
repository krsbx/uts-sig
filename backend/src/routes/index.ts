import { createResourcesResponse } from '@krsbx/response-formatter';
import { Router } from 'express';
import { asyncMw } from 'express-asyncmw';
import repository from '../repository';

const router = Router();

// GET /kantor-poss
router.get(
  '/kantor-poss',
  asyncMw(async (req, res) => {
    const kantorPoss = await repository.KantorPos.findAll(
      {},
      {},
      {
        orderBy: 'gid',
        order: 'ASC',
        ...req.query,
      }
    );

    return res.status(200).send(createResourcesResponse(req, kantorPoss));
  })
);

// GET /kantor-plns
router.get(
  '/kantor-plns',
  asyncMw(async (req, res) => {
    const kantorPlns = await repository.KantorPln.findAll(
      {},
      {},
      {
        orderBy: 'gid',
        order: 'ASC',
        ...req.query,
      }
    );

    return res.status(200).send(createResourcesResponse(req, kantorPlns));
  })
);

// GET /spbus
router.get(
  '/spbus',
  asyncMw(async (req, res) => {
    const spbus = await repository.Spbu.findAll(
      {},
      {},
      {
        orderBy: 'gid',
        order: 'ASC',
        ...req.query,
      }
    );

    return res.status(200).send(createResourcesResponse(req, spbus));
  })
);

// GET /administrasi-kabupatens
router.get(
  '/administrasi-kabupatens',
  asyncMw(async (req, res) => {
    const kabupatens = await repository.AdministrasiKabupaten.findAll(
      {},
      {},
      {
        orderBy: 'gid',
        order: 'ASC',
        ...req.query,
      }
    );

    return res.status(200).send(createResourcesResponse(req, kabupatens));
  })
);
// GET /administrasi-kecamatans
router.get(
  '/administrasi-kecamatans',
  asyncMw(async (req, res) => {
    const kecamatans = await repository.AdministrasiKecamatan.findAll(
      {},
      {},
      {
        orderBy: 'gid',
        order: 'ASC',
        ...req.query,
      }
    );

    return res.status(200).send(createResourcesResponse(req, kecamatans));
  })
);

export default router;
