import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";



export function VideoDetails({
  navigation,
  route,
}: RootStackScreenProps<"VideoDetails">) {
  const { video } = route.params;
  const [isLoading, setIsloading] = useState(false);

  async function downloadVideo() {
    try {
    //   const downloadDest = `${RNFS.DocumentDirectoryPath}/${video.title}.mp4`;
    //   const options = {
    //     fromUrl: video.download_url,
    //   toFile: downloadDest,
    //   background: true,
    //   discretionary: true,
    //   begin: () => {
    //     console.log("Iniciando download...");
    //   }
    // }
    // const result = await RNFS.downloadFile(options).promise;
    // console.log("Download finalizado:", result);

    // // opcional: mostrar onde o vídeo foi salvo
    // alert(`Vídeo salvo em: ${downloadDest}`);


    } catch (error) {
      const errMsg = "Erro ao enviar comando: " + error;
      // setOutput(errMsg);
    } finally {
      setIsloading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Vídeo a ser baixado</Text>
      <ScrollView>
        <View style={styles.item}>
          <Text style={styles.title}>{video.title}</Text>
          <Text style={styles.subtitle}>
            URL expira em {video.expires_in_minutes} minutos
          </Text>
          <Text style={styles.subtitle}>
             {video.download_url}
          </Text>
          <View style={styles.controls}>
            {/*TODO: Ajustar o botão de dowaload para que fique a direita no CSS  */}
            {isLoading ? (
              <ActivityIndicator color={"#fff"} />
            ) : (
              <TouchableOpacity style={styles.iconButton}>
                <Feather
                  name="download"
                  size={24}
                  color="white"
                  onPress={downloadVideo}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    backgroundColor: "#111",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 4,
  },
  controls: {
    flexDirection: "row",
    marginTop: 10,
  },
  iconButton: {
    marginRight: 16,
  },
});
