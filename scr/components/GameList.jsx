import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const GameList = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axios.get(
          "https://www.freetogame.com/api/games"
        );
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    }

    fetchGames();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.short_description}</Text>
      <Text style={styles.genre}>Genre: {item.genre}</Text>
      <Text style={styles.platform}>Platform: {item.platform}</Text>
      <Text style={styles.developer}>Developer: {item.developer}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  genre: {
    fontSize: 14,
  },
  platform: {
    fontSize: 14,
  },
  developer: {
    fontSize: 14,
  },
});

export default GameList;
