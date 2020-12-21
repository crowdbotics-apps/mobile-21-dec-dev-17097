import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen216024Navigator from '../features/BlankScreen216024/navigator';
import BlankScreen016023Navigator from '../features/BlankScreen016023/navigator';
import BlankScreen316022Navigator from '../features/BlankScreen316022/navigator';
import BlankScreen316021Navigator from '../features/BlankScreen316021/navigator';
import BlankScreen216006Navigator from '../features/BlankScreen216006/navigator';
import BlankScreen016004Navigator from '../features/BlankScreen016004/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen216024: { screen: BlankScreen216024Navigator },
BlankScreen016023: { screen: BlankScreen016023Navigator },
BlankScreen316022: { screen: BlankScreen316022Navigator },
BlankScreen316021: { screen: BlankScreen316021Navigator },
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
