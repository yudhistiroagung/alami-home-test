import { NativeModules } from 'react-native';

import { throwIfMissing } from '../utils';

interface DeviceInfoModuleInstance {
  getDeviceUniqueId: () => Promise<string>;
}

const DeviceInfoModule =
  NativeModules.DeviceInfoModule as DeviceInfoModuleInstance;

const getDeviceUniqueId = async (): Promise<string> => {
  throwIfMissing(DeviceInfoModule, 'DeviceInfoModule not found');

  return DeviceInfoModule.getDeviceUniqueId();
};

export default {
  getDeviceUniqueId,
} as const;
