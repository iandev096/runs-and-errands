import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Screen } from '../../../../UIComponents/Screen';
import { Container } from '../../../../UIComponents/Container';
import { FadeTitleText } from '../../../../UIComponents/FadeTitleText';
import { ThemeContext } from 'react-native-elements';
import { VEHICLES } from '../../../../data/vehicles/data';
import { VehicleCard } from '../../../../UIComponents/VehicleCard';
import { VehicleList } from './VehicleList';
import { RentCarNavigationProp, RentCarRouteProp } from './types';
import { Vehicle, CATEGORIES } from '../../../../data/vehicles/types';

interface VehicleListScreenProps {
  navigation: RentCarNavigationProp<'VehicleList'>,
  route: RentCarRouteProp<'VehicleList'>
}

export const VehicleListScreen: React.FC<VehicleListScreenProps> = ({ navigation, route }) => {
  const [filterdVehicles, setFilterdVehicles] = useState<Vehicle[]>([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (route.params.category) {
      const currentCategory = route.params.category;
      const filtered = VEHICLES.filter((vehicle) => {
        return vehicle.categories.some(category => category.toString() === currentCategory);
      });

      setFilterdVehicles(filtered);
    }
  }, [route.params.category]);

  const navToDetail = (vehicleId: string) => {
    navigation.navigate('VehicleDetail', { vehicleId });
  }

  return (
      <Container style={styles.container}>
      <View style={styles.inner}>
        <FadeTitleText theme={theme}>Select Vehicle</FadeTitleText>
        <View style={styles.vehicles}>
          <VehicleList vehicles={filterdVehicles} theme={theme} navToDetail={navToDetail } />
        </View>
      </View>
    </Container>

  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    minHeight: Dimensions.get('window').height - 50,
  },
  inner: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
  },
  vehicles: {
    marginTop: 10
  },
});