import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'react-native-elements';
import { BecomeDriverStackParamList } from './types';
import { DriverDetailsScreen } from './DriverDetailsScreen';

interface BecomeDriverStackProps {

}

const Stack = createStackNavigator<BecomeDriverStackParamList>();

export const BecomeDriverStack: React.FC<BecomeDriverStackProps> = ({ }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName='DriverDetails'
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: theme.colors?.primary }
        }}
        name='DriverDetails'
        component={DriverDetailsScreen}
      />
    </Stack.Navigator>
  );
}
