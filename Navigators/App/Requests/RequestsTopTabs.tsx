import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemeContext } from 'react-native-elements';
import { RequestsTabsParamList } from './requests.types';
import { RequestListScreen } from './RequestListScreen';
import { SERVICES, SERVICE_NAME } from '../../../data/services/data';

interface RequestsTopTabsProps {

}

type RequestServices = SERVICE_NAME.CargoGoods | SERVICE_NAME.ErrandDelivery | SERVICE_NAME.RentOutCar | SERVICE_NAME.HireDriver

const TopTabs = createMaterialTopTabNavigator<RequestsTabsParamList>();

const RQ_SERVICES = {
  [SERVICE_NAME.CargoGoods]: true,
  [SERVICE_NAME.ErrandDelivery]: true,
  [SERVICE_NAME.HireDriver]: true,
  [SERVICE_NAME.RentCar]: true,
}

export const RequestsTopTabs: React.FC<RequestsTopTabsProps> = ({ }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TopTabs.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        activeTintColor: theme.colors?.primary,
        inactiveTintColor: theme.colors?.grey3,
        indicatorStyle: { backgroundColor: theme.colors?.primary },
      }}
      lazy
    >
      <TopTabs.Screen
        options={{ title: 'All' }}
        name='All'
        component={RequestListScreen}
      />
      <TopTabs.Screen
        options={{ title: SERVICE_NAME.RentCar }}
        name={SERVICE_NAME.RentCar}
        component={RequestListScreen}
      />
      <TopTabs.Screen
        options={{ title: SERVICE_NAME.ErrandDelivery }}
        name={SERVICE_NAME.ErrandDelivery}
        component={RequestListScreen}
      />
      <TopTabs.Screen
        options={{ title: SERVICE_NAME.HireDriver }}
        name={SERVICE_NAME.HireDriver}
        component={RequestListScreen}
      />
      <TopTabs.Screen
        options={{ title: SERVICE_NAME.CargoGoods }}
        name={SERVICE_NAME.CargoGoods}
        component={RequestListScreen}
      />
    </TopTabs.Navigator>
  );
}
