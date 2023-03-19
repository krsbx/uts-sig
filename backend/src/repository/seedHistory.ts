import BaseRepository from './baseRepository';
import {
  ModelScalarFields,
  ModelStructure,
  MODELS_NAME,
  ModelTypes,
} from './prisma-repo';

// This type will be used if you want to extends the functions in SeedHistory Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.SEED_HISTORY]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.SEED_HISTORY]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.SEED_HISTORY]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.SEED_HISTORY]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.SEED_HISTORY]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.SEED_HISTORY]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.SEED_HISTORY]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.SEED_HISTORY]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.SEED_HISTORY]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.SEED_HISTORY>;
type Model = ModelStructure[typeof MODELS_NAME.SEED_HISTORY];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class SeedHistory extends BaseRepository(MODELS_NAME.SEED_HISTORY) {}

export default SeedHistory;
