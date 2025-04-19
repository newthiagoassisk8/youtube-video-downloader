import { Text, View, ScrollView } from "react-native";
import { styles } from "./styles";

type Output = {
  message: string;
};

export function OutputShell(output: Output) {
  return (
    <View style={styles.outputContainer}>
      <ScrollView>
        <Text style={styles.outputText}>{output.message}</Text>
      </ScrollView>
    </View>
  );
}
