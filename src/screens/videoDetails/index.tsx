import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import RNFS from "react-native-fs";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

// import * as Permissions from 'expo-permissions';

export function VideoDetails({
  navigation,
  route,
}: RootStackScreenProps<"VideoDetails">) {
  const { video } = route.params;
  const [isLoading, setIsloading] = useState(false);

  async function downloadVideo() {
    try {
      setIsloading(true);
      const filename = `${video.title}.mp4`;
      const downloadDest = `${FileSystem.documentDirectory}${filename}`;

      const downloadResumable = FileSystem.createDownloadResumable(
        video.download_url,
        downloadDest,
        {},
        (downloadProgress) => {
          const progress =
            downloadProgress.totalBytesWritten /
            downloadProgress.totalBytesExpectedToWrite;
          console.log(`Progresso do download: ${(progress * 100).toFixed(2)}%`);
        }
      );

      const result = await downloadResumable.downloadAsync();

      if (result) {
        const { uri } = result;
        console.log("uri");
        console.log(uri);
        console.log("Download concluído em:", uri);
        const permissionResult = await MediaLibrary.requestPermissionsAsync();
        console.log(permissionResult)

        if (
          !permissionResult.granted &&
          permissionResult.status !== MediaLibrary.PermissionStatus.GRANTED
        ) {
          alert("Permissão para acessar a galeria foi negada.");
          return;
        }

        try {
          const asset = await MediaLibrary.createAssetAsync(uri);
          const album = await MediaLibrary.getAlbumAsync("Download");
          if (album) {
            await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
          } else {
            await MediaLibrary.createAlbumAsync("Download", asset, false);
          }

          alert("Vídeo salvo na galeria com sucesso!");
        } catch (saveError) {
          console.error("Erro ao salvar na galeria:", saveError);
          alert("Erro ao salvar na galeria.");
        }
      } else {
        console.warn("Download não retornou resultado.");
      }
    } catch (error: any) {
      console.error("Erro ao baixar vídeo:", error?.message || error);
      alert("Erro ao baixar vídeo: " + (error?.message || error));
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
          <Text style={styles.subtitle}>{video.download_url}</Text>
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
