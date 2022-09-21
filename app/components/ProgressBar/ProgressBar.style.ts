import { StyleSheet } from 'react-native';

import { colors } from '../../themes';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  progressContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.grey,
    padding: 2,
    marginHorizontal: 24,
    width: '100%',
  },
  progressFill: {
    backgroundColor: colors.primary,
    height: 16,
    borderRadius: 6,
  },
  progressText: {
    fontSize: 16,
    fontColor: colors.black,
    marginTop: 8,
  },
});

export const btnColor = colors.primary;
