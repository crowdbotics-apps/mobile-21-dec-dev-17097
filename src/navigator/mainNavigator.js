import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen016020Navigator from '../features/CopyOfBlankScreen016020/navigator';
import BlankScreen216006Navigator from '../features/BlankScreen216006/navigator';
import BlankScreen016004Navigator from '../features/BlankScreen016004/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen016020: { screen: CopyOfBlankScreen016020Navigator },
BlankScreen216006: { screen: BlankScreen216006Navigator },
BlankScreen016004: { screen: BlankScreen016004Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
