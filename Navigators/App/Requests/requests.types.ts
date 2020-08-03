import { RouteProp } from "@react-navigation/native";
import { MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs'

export type RequestsTabsParamList = {

}

export type RequestsTabsKey = keyof RequestsTabsParamList;
export type RequestsRouteProp<T extends keyof RequestsTabsParamList> = RouteProp<RequestsTabsParamList, T>;
export type RequestsNavigationProp = MaterialTopTabNavigationProp<RequestsTabsParamList>
