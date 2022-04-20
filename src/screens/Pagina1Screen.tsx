/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { DrawerScreenProps } from '@react-navigation/drawer';
// import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { styles } from '../theme/appTheme';

// interface Props extends NativeStackScreenProps<any, any>{}
interface Props extends DrawerScreenProps<any, any>{}

export const Pagina1Screen = ( { navigation }: Props ) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Menu"
          onPress={ () => navigation.toggleDrawer() }
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Pagina1Screen</Text>
      <Button
        title="Ir página 2"
        onPress={ () => navigation.navigate('Pagina2Screen') }
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 20,
        marginLeft: 5,
      }}>Navegar con argumentos</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856d6',
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Pablo',
          }) }
        >
          <Text style={ styles.botonGrandeTexto }>Pablo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#ff9427',
          }}
          onPress={ () => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'César',
          }) }
        >
          <Text style={ styles.botonGrandeTexto }>César</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
