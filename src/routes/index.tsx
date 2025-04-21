import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { ApiConfigProvider } from "src/contexts/ApiConfigContext";
import { useTheme } from "styled-components/native";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const { COLORS } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.WHITE }}>
      <ApiConfigProvider>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ApiConfigProvider>
    </View>
  );
}
