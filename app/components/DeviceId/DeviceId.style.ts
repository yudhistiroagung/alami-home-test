import { StyleSheet } from 'react-native';

import { colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  label: {
    color: colors.grey,
    fontSize: 14,
  },
  deviceId: {
    color: colors.black,
    fontSize: 16,
    letterSpacing: 2,
  },
  error: {
    color: colors.red,
    fontSize: 12,
  },
});

export const btnColor = colors.primary;
