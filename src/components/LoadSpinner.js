import React, { useState } from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function LoadSpinner() {

  return (
    <View>
      <Spinner
        textContent={'Carregando...'}
        textStyle={{ color: '#FFF' }}
      />
    </View>
  )
}
