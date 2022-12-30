import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { countries } from "../data";

export function Game() {
  const [score, setScore] = useState(0);
  const [country, setCountry] = useState("");
  const [flags, setFlags] = useState([
    countries[5].image,
    countries[8].image,
    countries[10].image,
  ]);

  function nextCountry() {
    var the3Countries = pick3RandomCountries(countries);
    setCountry(the3Countries[Math.floor(Math.random() * 3)]);
    setFlags([
      the3Countries[0],
      the3Countries[1],
      the3Countries[2],
    ]);
    console.log(flags);
  }

  function pick3RandomCountries(countries) {
    const allCountries = [...countries];
    let the3Countries = [];
    for (let i = 0; i < 3; i++) {
      let randomPosition = Math.floor(allCountries.length * Math.random());
      let randomCountry = allCountries.splice(randomPosition, 1);
      the3Countries.push(...randomCountry);
    }
    return the3Countries;
  }

  function handleOnPress(name) {

    if (name == country.name) {
        setScore(score + 1);
    }
    nextCountry();
  }

  useEffect(() => {
    nextCountry();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.text}>Choose the right flag!</Text>
        </View>
        <View style={styles.middle1}>
          <Text style={[styles.large, styles.text]}>{country.name}</Text>
        </View>
        <View style={styles.middle2}>
          <TouchableOpacity onPress={() => handleOnPress(flags[0].name)}>
            <Image source={flags[0].image} style={styles.smalllogo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOnPress(flags[1].name)}>
            <Image source={flags[1].image} style={styles.smalllogo} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleOnPress(flags[2].name)}>
            <Image source={flags[2].image} style={styles.smalllogo} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.text}>Score: {score}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    color: "white",
    backgroundColor: "black",
  },
  heading: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  middle1: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  middle2: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  bottom: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
  large: {
    fontSize: 30,
  },
  smalllogo: {
    width: 100,
    height: 100,
  },
});
