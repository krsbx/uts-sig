export const RESOURCE_NAME = {
  ADMINISTRASI_KABUPATEN: 'administrasiKabupaten',
  ADMINISTRASI_KECAMATAN: 'administrasiKecamatan',
  KANTOR_PLN: 'kantorPln',
  KANTOR_POS: 'kantorPos',
  SPBU: 'spbu',
} as const;

export const RESOURCE_PATH = {
  [RESOURCE_NAME.ADMINISTRASI_KABUPATEN]: 'administrasi-kabupatens',
  [RESOURCE_NAME.ADMINISTRASI_KECAMATAN]: 'administrasi-kecamatans',
  [RESOURCE_NAME.KANTOR_PLN]: 'kantor-plns',
  [RESOURCE_NAME.KANTOR_POS]: 'kantor-poss',
  [RESOURCE_NAME.SPBU]: 'spbus',
} as const;
