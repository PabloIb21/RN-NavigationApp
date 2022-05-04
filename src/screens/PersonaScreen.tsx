import React, { useContext, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

// interface RouterParams {
//   id: number;
//   nombre: string;
// }

interface Props extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'>{}

export const PersonaScreen = ({ route, navigation }: Props) => {
  const { changeUsername } = useContext(AuthContext);
  // const params = route.params as RouterParams;
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params!.nombre,
    });
  }, [navigation, params]);

  useEffect(() => {
    changeUsername(params.nombre);
  }, [changeUsername, params.nombre]);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>
        {
          JSON.stringify( params, null, 3 )
        }
      </Text>
    </View>
  );
};
