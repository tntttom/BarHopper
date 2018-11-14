import { createStackNavigator } from 'react-navigation';
import MapScreen from './MapScreen';
import Home from './Home';
import ListScreen from './ListScreen';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    MapScreen: { screen: MapScreen },
    ListScreen: { screen: ListScreen},
    LoginScreen: { screen: LoginScreen},
    },
    {
        headerMode: 'none',
        initialRouteName:'Home',
    }
);

export default AppNavigator;