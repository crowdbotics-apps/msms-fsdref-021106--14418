import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen113657Navigator from '../features/BlankScreen113657/navigator';
import BlankScreen213656Navigator from '../features/BlankScreen213656/navigator';
import BlankScreen013651Navigator from '../features/BlankScreen013651/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen113657: { screen: BlankScreen113657Navigator },
BlankScreen213656: { screen: BlankScreen213656Navigator },
BlankScreen013651: { screen: BlankScreen013651Navigator },

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
