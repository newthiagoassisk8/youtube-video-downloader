import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#131016",
      padding: 24,
    },
    title: {
      color: "#FFF",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48,
      marginBottom: 36,
    },
    label: {
      color: "#FFF",
      fontSize: 16,
      marginBottom: 8,
      marginTop: 16,
    },
    input: {
      height: 56,
      backgroundColor: "#1F1E25",
      borderRadius: 5,
      color: "#FFF",
      paddingHorizontal: 16,
      fontSize: 16,
    },
    button: {
      backgroundColor: "#31CF67",
      height: 56,
      borderRadius: 2,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 32,
    },
    buttonText: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: "bold",
    },
    footer: {
      marginTop: 24,
      color: "#6B6B6B",
      fontSize: 14,
    },
  });

  export default styles;
