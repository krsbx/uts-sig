import _ from 'lodash';
import BaseRepository from './baseRepository';
import {
  AnyRecord,
  ModelStructure,
  ModelTypes,
  ModelScalarFields,
  MODELS_NAME,
} from './prisma-repo';

// This type will be used if you want to extends the functions in SeedHistory Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.SEEDHISTORY]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.SEEDHISTORY]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.SEEDHISTORY]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.SEEDHISTORY]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.SEEDHISTORY]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.SEEDHISTORY]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.SEEDHISTORY]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.SEEDHISTORY]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.SEEDHISTORY]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.SEEDHISTORY>;
type Model = ModelStructure[typeof MODELS_NAME.SEEDHISTORY];
/*  eslint-enable @typescript-eslint/no-unused-vars */

class SeedHistory extends BaseRepository(MODELS_NAME.SEEDHISTORY) {}

export default SeedHistory;
