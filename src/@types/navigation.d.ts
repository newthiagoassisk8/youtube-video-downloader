import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "src/routes/app.routes";

export declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export declare global {
  type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;
}
