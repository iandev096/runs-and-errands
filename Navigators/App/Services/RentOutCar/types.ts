import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type RentOutCarStackParamList = {
  VehicleDetails: undefined,
  ContactDetails: undefined,
  AdditionalInfo: undefined
}

export type RentOutCarNavigationProp<T extends keyof RentOutCarStackParamList> = StackNavigationProp<RentOutCarStackParamList, T>;

export type RentOutCarRouteProp<T extends keyof RentOutCarStackParamList> = RouteProp<RentOutCarStackParamList, T>; 
