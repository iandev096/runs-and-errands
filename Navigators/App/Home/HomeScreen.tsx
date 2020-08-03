import React, { useContext } from 'react';
import { View, Dimensions, StyleSheet, ActivityIndicator } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { Screen } from '../../../UIComponents/Screen';
import { Container } from '../../../UIComponents/Container';
import { ThemeContext, Image } from 'react-native-elements';
import { BottomNavigationProp } from '../BottomTabs/bottomTabs.types';
import { CustomCard } from '../../../UIComponents/CustomCard';
import { SERVICES, SERVICE_NAME } from '../../../data/services-data';
import { NormalText } from '../../../UIComponents/NormalText';

interface HomeScreenProps {
  navigation: BottomNavigationProp<'Home'>
}


export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const navToService = (serviceName: string) => {
    navigation.navigate('Services', { screen: serviceName})
  }

  return (
    <>
      <Screen>
        <Container style={styles.container}>
          <View style={styles.inner}>
            <View style={styles.services}>
              {SERVICES.map(cardData => (
                <CustomCard containerStyle={styles.service} key={cardData.name}>
                  <TouchableScale onPress={() => navToService(cardData.name)}>
                    <View style={styles.imageContainer}>
                      <Image
                        PlaceholderContent={
                          <View style={styles.cardImgPlaceholderContent}>
                            <ActivityIndicator color={theme.colors?.primary} />
                          </View>
                        }
                        style={styles.image}
                        source={cardData.imageUrl}
                      />
                    </View>
                    <NormalText numberOfLines={2} style={{ textAlign: 'center', padding: 5, fontSize: 15 }}>{cardData.title}</NormalText>
                  </TouchableScale>
                </CustomCard>
              ))}
            </View>
          </View>
        </Container>
      </Screen>
    </>
  );

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    minHeight: Dimensions.get('window').height - 50,
    paddingHorizontal: 10,
  },
  inner: {
    width: '100%',
    height: '100%',
  },
  services: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  service: {
    flexBasis: '49%',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 170,
    margin: 0,
    padding: 0,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100
  },
  cardImgPlaceholderContent: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardTitle: {

  }
});
