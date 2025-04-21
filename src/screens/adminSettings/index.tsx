import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Loader from "@components/loader";
import { useApiConfig } from "src/contexts/ApiConfigContext";
import styles from "./styles";

export function AdminSettings({
  navigation,
  route,
}: RootStackScreenProps<"AdminSettings">) {
  const { apiUrl, setApiUrl } = useApiConfig();
  const [urlInput, setUrlInput] = useState(apiUrl);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (!urlInput) return;

    setIsLoading(true);

    setTimeout(() => {
      setApiUrl(urlInput);
      setIsLoading(false);
    }, 500);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loader />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Painel Administrativo</Text>

      <Text style={styles.label}>URL da API</Text>
      <TextInput
        style={styles.input}
        placeholder={apiUrl}
        placeholderTextColor="#6B6B6B"
        value={urlInput}
        onChangeText={setUrlInput}
      />

      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>ok</Text>
      </TouchableOpacity>
    </View>
  );
}
