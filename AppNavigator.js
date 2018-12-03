import MapScreen from './MapScreen';
import HomeScreen from './Home';
import ListScreen from './ListScreen';
import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(
	{
    Home: HomeScreen,
    MapScreen: MapScreen,
    ListScreen: ListScreen,
  },
  {
    headerMode: 'none',
    initialRouteName:'Home',
  }
);

export default AppNavigator;