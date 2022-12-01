import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import CircularProgress from 'react-native-circular-progress-indicator';
import Animated from 'react-native-reanimated';

export default function App() {
  const [PedometerAvailbility, setPedometerAvailibility] = 
  useState("");
  const [stepCount, updateStepCount] = useState(0);
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
    <View style={styles.container}>
      <Text>{}</Text>

      <View>
        <CircularProgress
          value ={stepCount}
          maxValue ={5000}
          radius = {100}
          activeStrokeColor = {'dodgerblue'}
          inActiveStrokeColor ={'gray'}
          inActiveStrokeOpacity = {0.5}
          inActiveStrokeWidth = {40}
          activeStrokeWidth = {40}
          title = {"Step count"}
          titleColor = {'#ECF0F1'}
          titleStyle = {{fontWeight: 'bold', color: 'black', fontSize: 20}}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-end',
    marginTop: -5,
    position: 'absolute',
  },
});

