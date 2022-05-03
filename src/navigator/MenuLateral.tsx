/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, useWindowDimensions, View, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

// import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

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
      <Drawer.Screen name="Tabs" component={ Tabs } />
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
            style={{
              ...styles.menuBoton,
              flexDirection: 'row',
            }}
            onPress={ () => navigation.navigate('Tabs') }
          >
            <Icon name="compass-outline" size={ 20 } color="black" />
            <Text style={ styles.menuTexto }> Navegación</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.menuBoton,
              flexDirection: 'row',
            }}
            onPress={ () => navigation.navigate('SettingsScreen') }
          >
            <Icon name="cog-outline" size={ 20 } color="black" />
            <Text style={ styles.menuTexto }> Ajustes</Text>
          </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
