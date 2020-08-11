import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Driver } from '../../../../data/hireDrivers/types';
import { Theme } from 'react-native-elements';
import { FlatList } from 'react-native-gesture-handler';
import { DriverCard } from '../../../../UIComponents/DriverCard';

interface DriverListProps {
  drivers: Driver[]
  theme: Theme,
  navToDetail: (driverId: string) => any
}

export const DriverList: React.FC<DriverListProps> = ({ drivers, theme, navToDetail }) => {

  const getYearsOfExpBadge = (year: number) => {
    const years = new Date().getFullYear() - year;
    if (years > 0) return [years + 'yrs EXP'];
  }

  return (
    <FlatList
    data={drivers}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ paddingBottom: 50 }}
    renderItem={({ item }) => (
      <View style={{ paddingVertical: 5 }}>
        <DriverCard
          key={item.id}
          isAvailable={item.isAvailable}
          categories={item.categories}
          thumbnailUrl={item.imageUrl}
          name={item.firstName + ' ' + item.lastName}
          theme={theme}
          badges={getYearsOfExpBadge(item.drivingSince)}
          onPress={() => navToDetail(item.id)}
        />
      </View>
    )}
  />
  );
};

const styles = StyleSheet.create({});