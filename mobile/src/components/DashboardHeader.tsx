import React from 'react';

import {
  TextInput,
  StyleSheet,
} from 'react-native';

import { COLORS } from '../theme/colors';

export default function CustomInput(
props:any
) {

  return (

    <TextInput
      {...props}
      style={styles.input}
      placeholderTextColor="#999"
    />

  );
}

const styles = StyleSheet.create({

  input: {

    backgroundColor:
      COLORS.white,

    borderRadius: 16,

    padding: 16,

    marginBottom: 12,

    borderWidth: 1,

    borderColor:
      COLORS.border,
  },

});