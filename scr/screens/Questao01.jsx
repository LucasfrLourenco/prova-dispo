import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";

const Questao01 = () => {
  const [countryName, setCountryName] = useState("");
  const [countryData, setCountryData] = useState([]);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      const paisData = response.data;
      setCountryData(paisData);
    } catch (error) {
      console.log("Erro na requisição:", error);
      setCountryData([]);
    }
  };

  const handleButtonPress = () => {
    if (countryName.length > 0) {
      setButtonDisabled(false);
      fetchData();
    } else {
      setButtonDisabled(true);
    }
  };

  const handleInputChange = (text) => {
    setCountryName(text);
    if (text.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  const renderCountryInfo = ({ item }) => (
    <View style={styles.countryCard}>
      <Text style={styles.infoLabel}>Nome Oficial:</Text>
      <Text style={styles.infoText}>{item.name.official}</Text>

      <Text style={styles.infoLabel}>Região:</Text>
      <Text style={styles.infoText}>{item.region}</Text>

      <Text style={styles.infoLabel}>Subregião:</Text>
      <Text style={styles.infoText}>{item.subregion}</Text>

      <Text style={styles.infoLabel}>Área:</Text>
      <Text style={styles.infoText}>{item.area} km²</Text>

      <Text style={styles.infoLabel}>População:</Text>
      <Text style={styles.infoText}>{item.population}</Text>

      <Text style={styles.infoLabel}>Capital:</Text>
      <Text style={styles.infoText}>{item.capital}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do país"
        onChangeText={handleInputChange}
      />
      <Button
        style={styles.buttonSearch}
        title="Pesquisar"
        onPress={handleButtonPress}
        disabled={buttonDisabled}
      />
      <FlatList
        style={styles.countryInfo}
        data={countryData}
        keyExtractor={(item) => item.name.toString()}
        renderItem={renderCountryInfo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  buttonSearch: {
    backgroundColor: "blue",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  countryInfo: {
    marginTop: 20,
    width: "100%",
  },
  countryCard: {
    backgroundColor: "#34fcfc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoText: {
    marginBottom: 5,
  },
});

export default Questao01;
