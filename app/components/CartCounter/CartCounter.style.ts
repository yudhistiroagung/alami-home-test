import { StyleSheet } from 'react-native';

import { colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  spacer: {
    width: 24,
  },
  cartContainer: {
    padding: 4,
  },
  countBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: 20,
    width: 20,
    borderRadius: 14,
    fontSize: 9,
    backgroundColor: colors.red,
    color: colors.white,
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  cart: {
    width: 42,
    height: 42,
  },
});

export const btnColor = colors.primary;
