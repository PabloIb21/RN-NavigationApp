import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores, styles } from '../theme/appTheme';

export const Tab1Screen = () => {
  const { top } = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen');
  }, []);

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 10,
    }}>
      <Text style={ styles.title }>Iconos</Text>

      <Text>
        <Icon name="airplane-outline" size={ 80 } color={ colores.primary } />;
        <Icon name="attach-outline" size={ 80 } color={ colores.primary } />;
        <Icon name="bonfire-outline" size={ 80 } color={ colores.primary } />;
        <Icon name="calculator-outline" size={ 80 } color={ colores.primary } />;
        <Icon name="chatbubble-ellipses-outline" size={ 80 } color={ colores.primary } />;
        <Icon name="images-outline" size={ 80 } color={ colores.primary } />;
        <Icon name="leaf-outline" size={ 80 } color={ colores.primary } />;
      </Text>
    </View>
  );
};
