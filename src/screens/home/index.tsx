import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

// import {
//   createDrawerNavigator,
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OutputShell } from "@components/outputShell/index";

export function Home({ navigation }: RootStackScreenProps<"Home">) {
  const [cliCommand, setCliCommand] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const INPUT_KEY = "";
  const OUTPUT_KEY = "";

  async function handleSubmit() {
    try {
      setIsloading(true);

      const response = await fetch("http://192.168.0.27:8000/exec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ command: cliCommand }),
      });

      const data = await response.json();
      const result = data.returncode === 0 ? data.stdout : data.stderr;

      setOutput(result);

      await AsyncStorage.setItem(INPUT_KEY, cliCommand);
      await AsyncStorage.setItem(OUTPUT_KEY, result);
    } catch (error) {
      const errMsg = "Erro ao enviar comando: " + error;
      setOutput(errMsg);
      await AsyncStorage.setItem(OUTPUT_KEY, errMsg);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    async function loadData() {
      try {
        const savedCommand = await AsyncStorage.getItem("");
        const savedOutput = await AsyncStorage.getItem("");

        if (savedCommand) setCliCommand(savedCommand);
        if (savedOutput) setOutput(savedOutput);
      } catch (error) {
        console.error("Erro ao carregar dados salvos:", error);
      }
    }

    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Shell Client</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o comando CLI"
          placeholderTextColor="#6B6B6B"
          value={cliCommand}
          onChangeText={setCliCommand}
          keyboardType="default"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Feather name="check" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator color={"#fff"} />
      ) : (
        <OutputShell message={output}></OutputShell>
      )}
    </View>
  );
}
