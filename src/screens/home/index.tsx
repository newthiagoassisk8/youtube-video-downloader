import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { useApiConfig } from "src/contexts/ApiConfigContext";
import DownloadResponse from "src/@types/downloadresponse";
import Loader from "@components/loader";

export function Home({ navigation }: RootStackScreenProps<"Home">) {
  const [videoId, setvideoId] = useState("");
  const [output, setOutput] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const { apiUrl } = useApiConfig();

  function goToVideoDetail(videoData: DownloadResponse) {
    navigation.navigate("VideoDetails", { video: videoData });
  }

  function goToSettings() {
    navigation.navigate("AdminSettings");
  }

  async function handleSubmit() {
    try {
      setIsloading(true);

      const response = await fetch(`${apiUrl}/download`, {
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

  // TODO: Criar drawer para substituir esse botõa no futuro
  function ConfigButton() {
    return (
      <TouchableOpacity
        onPress={goToSettings}
        style={{
          position: "absolute",
          top: 48,
          right: 24,
          backgroundColor: "#1F1E25",
          padding: 12,
          borderRadius: 5,
        }}
      >
        <Feather name="settings" size={24} color="#31CF67" />
      </TouchableOpacity>
    );
  }
  // TODO: Descobrir como fazer o carregamento e progresso do download
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
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
          <Feather name="download" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <ConfigButton />
    </View>
  );
}
