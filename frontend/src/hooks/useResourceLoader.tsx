import { useEffect } from 'react';
import { getAllData } from '../store/actions/resources';
import { RESOURCE_NAME } from '../utils/constants';

const useResourceLoader = () => {
  useEffect(() => {
    Promise.all(
      [
        getAllData(RESOURCE_NAME.ADMINISTRASI_KABUPATEN),
        getAllData(RESOURCE_NAME.ADMINISTRASI_KECAMATAN),
        getAllData(RESOURCE_NAME.BANGUNAN),
        getAllData(RESOURCE_NAME.KANTOR_PLN),
        getAllData(RESOURCE_NAME.KANTOR_POS),
        getAllData(RESOURCE_NAME.SPBU),
      ].map((cb) => cb())
    );
  }, []);
};

export default useResourceLoader;
