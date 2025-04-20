import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { VideoDetails } from "@screens/videoDetails";
import DownloadResponse from "src/@types/downloadresponse";


export type RootStackParamList = {
  Home: undefined;
  MealCreate: undefined;
  VideoDetails: {
    video: DownloadResponse;
  };


};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

const Drawer = createDrawerNavigator();

export function AppRoutes() {

  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="VideoDetails" component={VideoDetails} />
    </Navigator>
  );
}
