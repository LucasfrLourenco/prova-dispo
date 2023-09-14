import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import GameList from "../components/GameList";

const Questao02 = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header title="Jogos Gratuitos" />
      <GameList />
    </View>
  );
};

export default Questao02;
