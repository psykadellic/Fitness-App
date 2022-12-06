import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import CircularProgress, { CircularProgressBase } from 'react-native-circular-progress-indicator';
import Animated from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

export default function App() {
  const [PedometerAvailbility, setPedometerAvailibility] = 
  useState("");
  const [stepCount, updateStepCount] = useState(0);

  let kals = stepCount * 0.04;
  let kalsRounded = kals.toFixed(2);


  useEffect(() => {
    subscribe();
  }, [])
  const subscribe = () => {
    const subscribtion = Pedometer.watchStepCount((result) => {
      updateStepCount(result.steps);
    })

    Pedometer.isAvailableAsync().then(
      (result) => {
        setPedometerAvailibility(String(result));
      },
      (error) => {
        setPedometerAvailibility(error);
      }
    );
  }


  return (
    <View style = {styles.container}>
      <Text></Text>



      <View>
      <CircularProgress
          value ={stepCount}
          maxValue ={1000}
          radius = {140}
          activeStrokeColor = {'dodgerblue'}
          inActiveStrokeColor ={'lightblue'}
          inActiveStrokeOpacity = {0.5}
          inActiveStrokeWidth = {50}
          activeStrokeWidth = {50}
          title = {"Step count"}
          //titleColor = {'#ECF0F1'}
          titleStyle = {{fontWeight: 'bold', color: 'black', fontSize: 20}}
        />
        <AntDesign style = {{ color: 'black', bottom: 275, left: 130, }} name="arrowright" size={25} color="black" />


          <CircularProgress
          value ={kalsRounded}
          maxValue ={300}
          radius = {140}
          activeStrokeColor = {'deeppink'}
          inActiveStrokeColor ={'lightpink'}
          inActiveStrokeOpacity = {0.5}
          inActiveStrokeWidth = {50}
          activeStrokeWidth = {50}
          title = {"Calories"}
          //titleColor = {'#ECF0F1'}
          titleStyle = {{fontWeight: 'bold', color: 'black', fontSize: 20}}
        />
        <AntDesign style = {{ color: 'black', bottom: 275, left: 130,}} name="arrowright" size={25} color="black" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

