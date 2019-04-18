import { createStackNavigator, createAppContainer } from 'react-navigation';
import Index from './screens/index';
import LoginScreen from './screens/loginScreen';
import ProfileScreen from './screens/myProfileScreen';

const StackNavigator = createStackNavigator({
  Index:{
    screen: Index
  },
  LoginScreen:{
    screen: LoginScreen
  },
  ProfileScreen:{
    screen: ProfileScreen
  }
}, {headerMode: 'none'});
export default createAppContainer(StackNavigator);