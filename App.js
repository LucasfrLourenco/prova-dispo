import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Questao01 from "./scr/screens/Questao01";
import Questao02 from "./scr/screens/questao02";

export default function App() {
  return <Questao02></Questao02>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
