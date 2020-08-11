import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Container } from '../../../../UIComponents/Container';
import { FadeTitleText } from '../../../../UIComponents/FadeTitleText';
import { ThemeContext } from 'react-native-elements';
import { Driver } from '../../../../data/hireDrivers/types';
import { DriverList } from './DriverList';
import { HireDriverNavigationProp, HireDriverRouteProp } from './types';
import { HIRE_DRIVERS } from '../../../../data/hireDrivers/data';

interface DriverListScreenProps {
  navigation: HireDriverNavigationProp<'DriverList'>,
  route: HireDriverRouteProp<'DriverList'>
}

export const DriverListScreen: React.FC<DriverListScreenProps> = ({ navigation, route }) => {
  const [filteredDrivers, setFilteredDrivers] = useState<Driver[]>([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (route.params.category) {
      const currentCategory = route.params.category;
      const filtered = HIRE_DRIVERS.filter((driver) => {
        return driver.categories.some(category => category.toString() === currentCategory);
      });

      setFilteredDrivers(filtered);
    }
  }, [route.params.category]);

  const navToDetail = (driverId: string) => {
    navigation.navigate('DriverDetail', { driverId });
  }

  return (
    <Container style={styles.container}>
      <View style={styles.inner}>
        <FadeTitleText theme={theme}>Select Driver</FadeTitleText>
        <View style={styles.vehicles}>
          <DriverList drivers={filteredDrivers} theme={theme} navToDetail={navToDetail} />
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