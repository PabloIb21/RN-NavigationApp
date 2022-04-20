import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina3Screen = ({ navigation }: Props) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Pagina3Screen</Text>

      <Button
        title="Regresar"
        onPress={ () => navigation.pop() }
      />
      <Button
        title="Ir a Página 1"
        onPress={ () => navigation.popToTop() }
      />
    </View>
  );
};