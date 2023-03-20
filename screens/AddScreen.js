import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useQuery } from 'react-query';

export default function AddScreen({navigation}) {
  const { isLoading, error, data } = useQuery('countries', () =>
    fetch('https://restcountries.com/v2/all').then((res) => res.json())
  );

  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleCountrySelect = (country) => {
    if (selectedCountries.includes(country)) {
      setSelectedCountries((prevSelected) =>
        prevSelected.filter((c) => c !== country)
      );
    } else {
      setSelectedCountries((prevSelected) => [...prevSelected, country]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
       <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backText}>
            Go Back
          </Text>
        </TouchableOpacity>
      </View>
      <View>
    <ScrollView>
      <Text style={styles.text}>Select the countries you've visited:</Text>
      {data.map((country) => (
        <Button
          key={country.alpha2Code}
          title={country.name}
          onPress={() => handleCountrySelect(country.name)}
          color={selectedCountries.includes(country.name) ? 'green' : undefined}
        />
      ))}
      <Text>You've visited {selectedCountries.length} countries</Text>
    </ScrollView>
      </View>
    </SafeAreaView>
      
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#023047',
      flexDirection: 'column',
    },
    text: {
      color: 'white',
      padding: 10,
    },
    backText: {
      color: 'white',
      fontWeight: 'bold',
      padding: 10,
    },
    visitedText: {
      fontSize: 30,
    }

});
