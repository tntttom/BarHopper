import { createStackNavigator } from 'react-navigation';
import MapScreen from './MapScreen';
import Home from './Home';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    MapScreen: { screen: MapScreen },
});

export default AppNavigator;