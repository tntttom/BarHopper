import { createStackNavigator } from 'react-navigation';
import MapScreen from './MapScreen';
import Home from './Home';
import ListScreen from './ListScreen';

//Everytime a new screen is added, import it here
const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    MapScreen: { screen: MapScreen },
    ListScreen: { screen: ListScreen},
    },
    {
        headerMode: 'none',
        initialRouteName:'Home',
    }
);

export default AppNavigator;