import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "@screens/home";

import { AdminSettings } from "@screens/adminSettings";
import { VideoDetails } from "@screens/videoDetails";

import DownloadResponse from "src/@types/downloadresponse";

export type RootStackParamList = {
  Home: undefined;
  VideoDetails: {
    video: DownloadResponse;
  };
  AdminSettings: undefined;
};
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="VideoDetails" component={VideoDetails} />
      <Screen name="AdminSettings" component={AdminSettings} />
    </Navigator>
  );
}
