import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type ErrandDeliveryStackParamList = {
  ErrandDeliveryCategory: undefined,
  Delivery: undefined,
  Errand: undefined,
}

export type ErrandDeliveryNavigationProp<T extends keyof ErrandDeliveryStackParamList> = StackNavigationProp<ErrandDeliveryStackParamList, T>;

export type ErrandDeliveryRouteProp<T extends keyof ErrandDeliveryStackParamList> = RouteProp<ErrandDeliveryStackParamList, T>; 
