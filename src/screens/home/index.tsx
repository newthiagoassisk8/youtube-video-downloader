import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from "react-native";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { OutputShell } from "@components/outputShell/index";
import DownloadResponse from "src/@types/downloadresponse";

export function Home({ navigation }: RootStackScreenProps<"Home">) {
  const [cliCommand, setCliCommand] = useState("");
  const [videoId, setvideoId] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsloading] = useState(false);

  const INPUT_KEY = "";
  const OUTPUT_KEY = "";

  function goToVideoDetail(videoData: DownloadResponse) {
    navigation.navigate("VideoDetails", { video: videoData });
  }

  async function handleSubmit() {
    try {
      setIsloading(true);

      const response = await fetch("http://192.168.0.27:8006/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: videoId }),
      });

      const data = await response.json();
      goToVideoDetail(data);
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
      <Text style={styles.eventName}>Youtube Client</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite o comando CLI"
          placeholderTextColor="#6B6B6B"
          onChangeText={setvideoId}
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Feather name="check" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Feather name="check" size={24} color="#6B6B6B" />
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
