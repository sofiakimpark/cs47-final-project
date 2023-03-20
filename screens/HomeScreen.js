import { StyleSheet, Text, View, StatusBar } from "react-native";
import Header from "../components/header";
import MapView, { Marker } from "react-native-maps";
import { useState } from "react";
import AddScreen from "./AddScreen";

export default function HomeScreen({ navigation }) {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleAddVisitedCountry = (country) => {
    setVisitedCountries([...visitedCountries, country]);
  };

  const handleRemoveVisitedCountry = (countryCode) => {
    setVisitedCountries(visitedCountries.filter((c) => c.alpha2Code !== countryCode));
  };

  const mapMarkers = visitedCountries.map((country) => (
    <Marker
      key={country.alpha2Code}
      coordinate={{
        latitude: country.latlng[0],
        longitude: country.latlng[1],
      }}
      title={country.name}
    />
  ));
    return (
        <View style={styles.container}>
            <Header />
        <View style={styles.map}>
          <MapView style={styles.map}
          initialRegion={{
            latitude: 0,
            longitude: 0,
            latitudeDelta: 60,
            longitudeDelta: 60,
          }}> 
          {mapMarkers}
        {/* Example marker */}
          </MapView>
        </View>
        <View style={styles.stats}>
        <Text style={styles.visitedText}>
          {`You've visited ${visitedCountries.length} countries!`}
        </Text>
        </View>
        <StatusBar style="auto" />
      </View>

    );
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#023047',
        flexDirection: 'column',
      },
      header: {
        backgroundColor: 'yellow',
        alignItems: 'center',
      },
      headerTitle: {
        color: 'white',
      },
      stats: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: '50',
        margin: 10,
        marginBottom: 20,
      },
      map: {
        flex: 3,
      },
      visitedText: {
        fontSize: 20,
        padding: 70,

      }

});