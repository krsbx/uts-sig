import { useEffect } from 'react';
import { getAllData } from '../store/actions/resources';
import { RESOURCE_NAME } from '../utils/constants';

const useResourceLoader = () => {
  useEffect(() => {
    Promise.all(
      [
        getAllData(RESOURCE_NAME.ADMINISTRASI_KABUPATEN, 'limit=all'),
        getAllData(RESOURCE_NAME.ADMINISTRASI_KECAMATAN, 'limit=all'),
        getAllData(RESOURCE_NAME.BANGUNAN, 'limit=all'),
        getAllData(RESOURCE_NAME.KANTOR_PLN, 'limit=all'),
        getAllData(RESOURCE_NAME.KANTOR_POS, 'limit=all'),
        getAllData(RESOURCE_NAME.SPBU, 'limit=all'),
      ].map((cb) => cb())
    );
  }, []);
};

export default useResourceLoader;
