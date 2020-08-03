import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type BecomeDriverStackParamList = {
  DriverDetails: undefined
}

export type BecomeDriverNavigationProp<T extends keyof BecomeDriverStackParamList> = StackNavigationProp<BecomeDriverStackParamList, T>;

export type BecomeDriverRouteProp<T extends keyof BecomeDriverStackParamList> = RouteProp<BecomeDriverStackParamList, T>; 
