import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, Switch } from 'react-native';
import NumericInput from 'react-native-numeric-input'


export default function App() {
  const [weight, setWeight] = useState(0)
  const [beerBottles, setBeerBottles] = useState(0)
  const [hours, setTime] = useState(0)
  const [gender, setGender] = useState(0.7)
  const [result, setResult] = useState(0)
  const [theme, setTheme] = useState(false)
  const [backgroundColor, setBackgroundColor] = useState('grey')
  const [color, setColor] = useState('black')

  const calculateDrunkenness = () => {

    if (weight == 0) {
      alert('Please enter your weight')
      return
    }
    //actual calculation here
    var burning = weight * 0.7;
    var litres = beerBottles * 0.33;
    var grams = litres * 8 * 4.5;
    var left = grams - (burning * hours);
    var result = left / (weight * gender);
    

    //makes negativ result positive and sets the results in fixed length
    if (result < 0) {
      result = result * -1;
      result = result.toFixed(2);
      setResult(result)
    } else {
      result = result.toFixed(2);
      setResult(result)
    }

  }
  //trackers for the input fields
  const weightTracker = (weight) => {
    setWeight(weight)
  }
  const bottleTracker = (beerBottles) => {
    setBeerBottles(beerBottles)
  }
  const timeTracker = (hours) => {
    setTime(hours)
  }

  //changes colors based on theme
  const themeChanger = (theme) => {
    setTheme(theme)
    setBackgroundColor(theme ? 'black' : 'grey')
    setColor(theme ? 'white' : 'black')
  }



  return (
    <View style={styles.container} backgroundColor={backgroundColor}>
      <Switch value={theme} onValueChange={themeChanger}/>
      <Text style={{color: color}}>Weight (kg)</Text>
      <TextInput keyboardType='number-pad'
        value={weight}
        onChangeText={weightTracker}
        style={{color: color, 
          height: 40,
          width: 200,
          margin: 12,
          padding: 10,
          borderWidth: 1,
          borderColor: 'white'}}/>
      <Text style={{color: color}}>Beer Bottles</Text>
      <NumericInput textColor={color} onChange={beerBottles => bottleTracker(beerBottles)} />
      <Text style={{color: color}}>Time</Text>
      <NumericInput textColor={color} onChange={hours => timeTracker(hours)} />
      <Button onPress={calculateDrunkenness} title="calculate" />  
      <Text style={{color: color, fontSize: 50}}>result: {result}</Text>
    </View>
  );
  }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  }
});
