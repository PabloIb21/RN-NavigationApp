import React from 'react';
import { Image, useWindowDimensions, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        headerShown: false,
      }}
      drawerContent={ (props) => <MenuInterno {...props} /> }
    >
      <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
};

const MenuInterno = ( { navigation }: DrawerContentComponentProps ) => {
  return (
    <DrawerContentScrollView>
      <View style={ styles.avatarContainer } >
        <Image
          source={{
            uri: 'https://printfactory.cloud/wp-content/uploads/2021/11/110-1100707_person-avatar-placeholder.jpg',
          }}
          style={ styles.avatar }
        />
      </View>

      <View style={ styles.menuContainer }>
          <TouchableOpacity
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('StackNavigator') }
          >
            <Text style={ styles.menuTexto }>Navegación</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ styles.menuBoton }
            onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Text style={ styles.menuTexto }>Ajustes</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
