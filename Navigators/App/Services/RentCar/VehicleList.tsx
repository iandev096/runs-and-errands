import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Vehicle } from '../../../../data/vehicles/types';
import { VehicleCard } from '../../../../UIComponents/VehicleCard';
import { Theme } from 'react-native-elements';

interface VehicleListProps {
  vehicles: Vehicle[],
  navToDetail: (vehicleId: string) => any,
  theme: Theme
}

export const VehicleList: React.FC<VehicleListProps> = ({ vehicles, theme, navToDetail }) => {

  return (
    <FlatList
      data={vehicles}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom: 50 }}
      renderItem={({ item }) => (
        <View style={{ paddingVertical: 5 }}>
          <VehicleCard
            key={item.id}
            minPrice={item.pricePerHalf.min}
            isAvailable={item.isAvailable}
            categories={item.categories}
            thumbnailUrl={item.imageUrl}
            title={item.make}
            theme={theme}
            badges={[item.fuel, item.gearbox]}
            onPress={() => navToDetail(item.id)}
          />
        </View>
      )}
    />
  );
};
