import { StyleSheet } from 'react-native';

import { colors } from './themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: colors.grey,
    opacity: 0.3,
  },
});
