import { useCallback, useState } from 'react';
import { DeviceInfo } from '../libs';

interface UseGetDeviceId {
  deviceId?: string;
  error: boolean;
  loading: boolean;
  get: () => Promise<string | undefined>;
}

const useGetDeviceId = (): UseGetDeviceId => {
  const [deviceId, setDeviceId] = useState<string>();
  const [error, setError] = useState<boolean>(false);
  const [loading, setloading] = useState<boolean>(false);

  const get = useCallback(async () => {
    setloading(true);
    setError(false);

    try {
      const res = await DeviceInfo.getDeviceUniqueId();
      setDeviceId(res);
      return res;
    } catch (e) {
      setError(true);
    } finally {
      setloading(false);
    }
  }, []);

  return {
    deviceId,
    error,
    loading,
    get,
  };
};

export { type UseGetDeviceId, useGetDeviceId };
