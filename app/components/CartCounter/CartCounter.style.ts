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
  badgeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 9,
    color: colors.white,
  },
  cart: {
    width: 42,
    height: 42,
  },
});

export const btnColor = colors.primary;
