import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RecoilRoot} from 'recoil';

import Home from './src/pages/Home';
import AddItem from './src/pages/AddItem';

const Stack = createNativeStackNavigator();

export default function Routing() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{
              title: 'My Todo List',
            }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              title: 'Add Item',
            }}
            name="AddItem"
            component={AddItem}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
