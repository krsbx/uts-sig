export const RESOURCE_NAME = {
  ADMINISTRASI_KABUPATEN: 'administrasiKabupaten',
  ADMINISTRASI_KECAMATAN: 'administrasiKecamatan',
  KANTOR_PLN: 'kantorPln',
  KANTOR_POS: 'kantorPos',
  SPBU: 'spbu',
  BANGUNAN: 'bangunan',
} as const;

export const RESOURCE_PATH = {
  [RESOURCE_NAME.ADMINISTRASI_KABUPATEN]: 'administrasi-kabupatens',
  [RESOURCE_NAME.ADMINISTRASI_KECAMATAN]: 'administrasi-kecamatans',
  [RESOURCE_NAME.KANTOR_PLN]: 'kantor-plns',
  [RESOURCE_NAME.KANTOR_POS]: 'kantor-poss',
  [RESOURCE_NAME.SPBU]: 'spbus',
  [RESOURCE_NAME.BANGUNAN]: 'bangunans',
} as const;

export const VIEWABLE_AREA = {
  KABUPATEN: 'KABUPATEN',
  KECAMATAN: 'KECAMATAN',
  BANGUNAN: 'BANGUNAN',
} as const;

export const TOGGLEABLE_OBJECT = {
  POS: 'POS',
  PLN: 'PLN',
  SPBU: 'SPBU',
} as const;
