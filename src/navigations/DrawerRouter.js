import * as React from 'react';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import { ServiceScreen } from '../index';
import CustomDrawer from './CustomDrawer';
import HeaderImage from './../components/HeaderImage';

const Drawer = createDrawerNavigator();

export default function DrawerRouter() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerTitle: props => <HeaderImage {...props} />,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTitleAlign: 'center',
        headerBackVisible: false,
        // animationTypeForReplace: token === false ? 'pop' : 'push',
      }} >
      <Drawer.Screen
        name="Services"
        component={ServiceScreen}
      />
    </Drawer.Navigator>
  );
}