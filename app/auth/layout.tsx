import { createStackNavigator } from '@react-navigation/stack';
import login from './login';
import signup from './signup';

const Stack = createStackNavigator();

const Layout = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={login} options = {{headerShown : false}}/>
      <Stack.Screen name="Signup" component={signup} options = {{headerShown : false}}/>
    </Stack.Navigator>
  );
}

export default Layout