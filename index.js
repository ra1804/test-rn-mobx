/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import NavigationWrapper from './src/navigation/navigation-wrapper';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => NavigationWrapper);
