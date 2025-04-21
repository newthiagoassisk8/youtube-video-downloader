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
import { useState } from "react";
import { OutputShell } from "@components/outputShell/index";
import DownloadResponse from "src/@types/downloadresponse";

export function Home({ navigation }: RootStackScreenProps<"Home">) {
  const [videoId, setvideoId] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsloading] = useState(false);

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
    } finally {
      setIsloading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Youtube Client</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="ID do vídeo do youtube"
          placeholderTextColor="#6B6B6B"
          onChangeText={setvideoId}
          keyboardType="default"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          {isLoading ? (
            <ActivityIndicator color={"#fff"} />
          ) : (
            <Feather name="search" size={24} color="#fff" />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
