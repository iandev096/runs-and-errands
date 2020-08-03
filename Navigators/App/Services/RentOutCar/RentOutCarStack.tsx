import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'react-native-elements';
import { RentOutCarStackParamList } from './types';
import { VehicleDetailsScreen } from './VehicleDetailsScreen';
import { ContactDetailsScreen } from './ContactDetailsScreen';
import { AdditionalInfoScreen } from './AdditionalInfoScreen';

interface RentOutCarStackProps {

}

const Stack = createStackNavigator<RentOutCarStackParamList>();

export const RentOutCarStack: React.FC<RentOutCarStackProps> = ({ }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName='VehicleDetails'
      headerMode='none'
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: theme.colors?.primary }
        }}
        name='VehicleDetails'
        component={VehicleDetailsScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: theme.colors?.primary }
        }}
        name='ContactDetails'
        component={ContactDetailsScreen}
      />
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: theme.colors?.primary }
        }}
        name='AdditionalInfo'
        component={AdditionalInfoScreen}
      />
    </Stack.Navigator>
  );
}