import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { ThemeContext, Button, ListItem } from 'react-native-elements';
import { RentCarNavigationProp, RentCarRouteProp } from './types';
import { Vehicle, ADDITIONAL_INFO } from '../../../../data/vehicles/types';
import { VEHICLES } from '../../../../data/vehicles/data';
import { Screen } from '../../../../UIComponents/Screen';
import { TextOverlaidImage } from '../../../../UIComponents/TextOverlaidImage';
import { FadeTitleText } from '../../../../UIComponents/FadeTitleText';
import { SectionTitle } from '../../../../UIComponents/SectionTitle';
import { FeatureText } from '../../../../UIComponents/FeatureText';

interface VehicleDetailScreenProps {
  navigation: RentCarNavigationProp<'VehicleDetail'>,
  route: RentCarRouteProp<'VehicleDetail'>
}

export const VehicleDetailScreen: React.FC<VehicleDetailScreenProps> = ({ navigation, route }) => {
  const [vehicle, setVehicle] = useState<Vehicle>();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (route.params.vehicleId) {
      setVehicle(VEHICLES.find(veh => veh.id === route.params.vehicleId));
    }
  }, [route.params.vehicleId]);

  const getAdditionalInfo = (additionalInfo: Set<ADDITIONAL_INFO> | undefined) => {
    if (additionalInfo) {
      return Array.from(additionalInfo);
    }
  }

  const goBack = () => navigation.goBack();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.vehicleInfo}>
        <TextOverlaidImage
          source={vehicle?.imageUrl}
          theme={theme}
          solidImgBorders={true}
          imageText={{ show: vehicle?.isAvailable ? false : true, text: 'NOT AVAILABLE' }}
        />
        <FadeTitleText theme={theme} style={{ padding: 10 }} numberOfLines={1} >{vehicle?.make}</FadeTitleText>
      </View>
      <Screen style={styles.vehicleDetails}>
        <ListItem
          title='Categories'
          subtitle={vehicle?.categories?.join(' • ')}
          leftIcon={{ name: 'ios-car', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        <ListItem
          title='Gearbox'
          subtitle={vehicle?.gearbox}
          leftIcon={{ name: 'ios-settings', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        {/* <ListItem
          title='Deposit'
          subtitle={'GH₵' + vehicle?.deposit}
          leftIcon={{ name: 'ios-card', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        /> */}
        <ListItem
          title='Fuel'
          subtitle={'GH₵' + vehicle?.fuel}
          leftIcon={{ name: 'ios-color-fill', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        <ListItem
          title='Min Price / Day'
          subtitle={'GH₵' + vehicle?.pricePerDay.min}
          leftIcon={{ name: 'ios-cash', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        <ListItem
          title='Min Price / Half Day'
          subtitle={'GH₵' + vehicle?.pricePerHalf.min}
          leftIcon={{ name: 'ios-cash', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        <ListItem
          title='Mileage'
          subtitle={'GH₵' + vehicle?.mileage}
          leftIcon={{ name: 'ios-speedometer', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        <ListItem
          title='Description'
          subtitle={'GH₵' + vehicle?.deposit}
          leftIcon={{ name: 'ios-book', type: 'ionicon', color: theme.colors?.primary }}
          bottomDivider
        />
        <View style={{ margin: 10 }}>
          <SectionTitle theme={theme}>Additional Info</SectionTitle>
          {getAdditionalInfo(vehicle?.additionalInfo)?.map(info => (
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
  vehicleInfo: {
    elevation: 3,
    backgroundColor: 'white',
    maxHeight: Dimensions.get('screen').height * 0.5,
  },
  image: {
    width: '100%',
    height: 200,
    maxHeight: Dimensions.get('screen').height * 0.3,
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