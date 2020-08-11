import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ThemeContext, Button, ListItem } from 'react-native-elements';
import { Screen } from '../../../../UIComponents/Screen';
import { TextOverlaidImage } from '../../../../UIComponents/TextOverlaidImage';
import { FadeTitleText } from '../../../../UIComponents/FadeTitleText';
import { SectionTitle } from '../../../../UIComponents/SectionTitle';
import { FeatureText } from '../../../../UIComponents/FeatureText';
import { HireDriverNavigationProp, HireDriverRouteProp } from './types';
import { Driver } from '../../../../data/hireDrivers/types';
import { HIRE_DRIVERS } from '../../../../data/hireDrivers/data';

interface DriverDetailScreenProps {
  navigation: HireDriverNavigationProp<'DriverDetail'>,
  route: HireDriverRouteProp<'DriverDetail'>
}

export const DriverDetailScreen: React.FC<DriverDetailScreenProps> = ({ navigation, route }) => {
  const [driver, setDriver] = useState<Driver>();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (route.params.driverId) {
      setDriver(HIRE_DRIVERS.find(veh => veh.id === route.params.driverId));
    }
  }, [route.params.driverId]);

  const getSetFromArr = (set: Set<string> | undefined) => {
    if (set) {
      return Array.from(set);
    }
  }

  const goBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.driverInfo}>
        <TextOverlaidImage
          source={driver?.imageUrl}
          theme={theme}
          solidImgBorders={true}
          style={{height: 300}}
          imageText={{ show: driver?.isAvailable ? false : true, text: 'NOT AVAILABLE' }}
        />
        <FadeTitleText theme={theme} style={{ padding: 10 }} numberOfLines={1} >{driver?.firstName + ' ' + driver?.lastName}</FadeTitleText>
      </View>
      <Screen style={styles.vehicleDetails}>
        <ListItem
          title='Categories'
          subtitle={driver?.categories?.join(' • ')}
          leftIcon={{ name: 'ios-car', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        <ListItem
          title='Lincense name'
          subtitle={driver?.nameOnLicense}
          leftIcon={{ name: 'ios-contact', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        {/* <ListItem
          title='Deposit'
          subtitle={'GH₵' + vehicle?.deposit}
          leftIcon={{ name: 'ios-card', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        /> */}
        <ListItem
          title='About'
          subtitle={driver?.about}
          leftIcon={{ name: 'ios-book', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        <View style={{ margin: 10 }}>
          <SectionTitle theme={theme}>Skills</SectionTitle>
          {getSetFromArr(driver?.skills)?.map(info => (
            <FeatureText key={info.toString()} theme={theme}>{info}</FeatureText>
          ))}
        </View>
        <View style={{ margin: 10 }}>
          <SectionTitle theme={theme}>Vehicle Types</SectionTitle>
          {getSetFromArr(driver?.typesOfVehicles)?.map(info => (
            <FeatureText key={info.toString()} theme={theme}>{info}</FeatureText>
          ))}
        </View>
      </Screen>
      <View style={styles.footer}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%'
        }}>
          <Button
            title='GO BACK'
            type='outline'
            onPress={() => goBack()}
            containerStyle={{ flexBasis: '48%' }} />
          <Button
            title='BOOK NOW'
            onPress={() => {}}
            containerStyle={{ flexBasis: '49%' }} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  driverInfo: {
    elevation: 3,
    backgroundColor: 'white',
    maxHeight: Dimensions.get('screen').height * 0.5,
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  vehicleDetails: {

  },
  footer: {
    paddingHorizontal: 10,
    height: 65,
    borderTopWidth: 1,
    borderTopColor: 'lightgrey',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});