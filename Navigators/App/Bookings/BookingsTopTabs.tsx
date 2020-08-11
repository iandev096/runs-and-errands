import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemeContext } from 'react-native-elements';
import { BookingsTabsParamList } from './bookings.types';
import { BookingsListScreen } from './BookingsListScreen';
import { SERVICE_NAME, SERVICES } from '../../../data/services/data';

interface  BookingsTopTabsProps {

}

const TopTabs = createMaterialTopTabNavigator<BookingsTabsParamList>();

export const  BookingsTopTabs: React.FC<BookingsTopTabsProps> = ({}) => {
  const {theme} = useContext(ThemeContext);
  
  return (
    <TopTabs.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: theme.colors?.primary,
        inactiveTintColor: theme.colors?.grey3,
        indicatorStyle: { backgroundColor: theme.colors?.primary }
      }}
    >
       <TopTabs.Screen
        options={{ title: 'All' }}
        name='All'
        component={BookingsListScreen}
      />
      {
        SERVICES.map(data => (
          <TopTabs.Screen
            key={data.name}
            options={{ title: data.title }}
            name={data.name as SERVICE_NAME}
            component={BookingsListScreen}
          />
        ))
      }
    </TopTabs.Navigator>
  );
}
