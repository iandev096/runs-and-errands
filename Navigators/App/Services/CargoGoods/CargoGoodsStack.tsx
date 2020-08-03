import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeContext } from 'react-native-elements';
import { CargoGoodsStackParamList } from './types';
import { CargoDetailsScreen } from './CargoDetailsScreen';

interface CargoGoodsStackProps {

}

const Stack = createStackNavigator<CargoGoodsStackParamList>();

export const CargoGoodsStack: React.FC<CargoGoodsStackProps> = ({ }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Stack.Navigator
      initialRouteName='CargoDetails'
      headerMode='none'
    >
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: theme.colors?.primary }
        }}
        name='CargoDetails'
        component={CargoDetailsScreen}
      />
    </Stack.Navigator>
  );
}