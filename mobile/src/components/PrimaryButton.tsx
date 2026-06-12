import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { COLORS } from '../theme/colors';

export default function PrimaryButton({
  title,
  onPress,
}: any) {

  return (

    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >

      <Text style={styles.text}>
        {title}
      </Text>

    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({

  button: {

    backgroundColor:
      COLORS.primary,

    padding: 16,

    borderRadius: 16,

    alignItems: 'center',
  },

  text: {
    fontWeight: '700',
    fontSize: 16,
  },

});
