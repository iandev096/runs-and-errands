import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type HireDriverStackParamList = {
  DriverCategory: undefined,
  DriverList: undefined
}

export type HireDriverNavigationProp<T extends keyof HireDriverStackParamList> = StackNavigationProp<HireDriverStackParamList, T>;

export type HireDriverRouteProp<T extends keyof HireDriverStackParamList> = RouteProp<HireDriverStackParamList, T>; 
