import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

import { COLORS } from '../theme/colors';

export default function ScreenContainer({
  children,
}: any) {

  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

});